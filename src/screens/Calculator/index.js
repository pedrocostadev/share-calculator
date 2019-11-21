import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { operationsActionCreators } from '../../actionsCreators/';
import Calculator from './calculator';

const mapStateToProps = state => ({
  operations: state.operations,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(operationsActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
