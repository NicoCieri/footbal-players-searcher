import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Filters from '../components/Filters';
import { setFilters } from '../actions';

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = dispatch => bindActionCreators({ setFilters }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
