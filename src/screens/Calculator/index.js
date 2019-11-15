import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { operationsActionCreators } from '../../actionsCreators/';
import Calculator from './calculator';
import { operationsSelectors } from '../../selectors';

const mapStateToProps = state => ({
  leftValue: operationsSelectors.selectLeftValue(state),
  rightValue: operationsSelectors.selectRightValue(state),
  operator: operationsSelectors.selectOperator(state),
  result: operationsSelectors.selectResult(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(operationsActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
