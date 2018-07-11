import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { POSITIONS } from '../constants';

class Filters extends Component {
  static propTypes = {
    filters: object.isRequired,
    setFilters: func.isRequired,
  }

  constructor(props) {
    super(props);
    const { filters: { name, position, age } } = props;

    this.state = {
      name,
      position,
      age,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    const { setFilters } = this.props;
    const {
      name,
      position,
      age,
    } = this.state;
    e.preventDefault();
    setFilters({ name, position, age });
  }

  render() {
    const {
      name,
      position,
      age,
    } = this.state;

    return (
      <div className="filters">
        <div className="navbar bg-light mb-3 mt-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-3">
                <input
                  name="name"
                  placeholder="Player Name"
                  className="form-control"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-3">
                <select
                  name="position"
                  className="form-control"
                  value={position}
                  onChange={this.handleChange}
                >
                  <option value="">Position</option>
                  {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="col-3">
                <input
                  type="number"
                  name="age"
                  min={18}
                  max={40}
                  placeholder="Age"
                  className="form-control"
                  value={age}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Filters;
