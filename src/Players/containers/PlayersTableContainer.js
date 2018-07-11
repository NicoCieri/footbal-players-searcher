import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PlayersTable from '../components/PlayersTable';
import { fetchPlayers } from '../actions';
import { getPlayers } from '../selectors';

const mapStateToProps = createStructuredSelector({
  players: getPlayers,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPlayers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayersTable);
