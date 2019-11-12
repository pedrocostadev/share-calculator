import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as OperationsActions from '../../actionsCreators/operationsCreators';
import Calculator from './calculator';

const mapStateToProps = ({ operations }) => ({
  leftValue: operations.leftValue,
  rightValue: operations.rightValue,
  operator: operations.operator,
  result: operations.result,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(OperationsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
