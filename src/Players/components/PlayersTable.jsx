import React, { Component } from 'react';
import { object, func } from 'prop-types';

class PlayersTable extends Component {
  static propTypes = {
    players: object.isRequired,
    fetchPlayers: func.isRequired,
  }

  componentDidMount() {
    const { fetchPlayers } = this.props;
    fetchPlayers();
  }

  render() {
    const {
      players: {
        filtered,
      },
    } = this.props;
    return (
      <div className="players-table">
        <table className="table table-striped table-hover table-sm">
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Nationality</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {filtered
              .map(({
                name,
                position,
                nationality,
                age,
              }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{position}</td>
                  <td>{nationality}</td>
                  <td>{age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayersTable;
