import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { operationsActionCreators, uiStateActionCreators } from '../../actionsCreators/';
import Calculator from './calculator';
import { selectIsPadVisible } from '../../selectors/uiState';

const mapStateToProps = state => ({
  operationsState: { operations: state.operations },
  isPadVisible: selectIsPadVisible(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(operationsActionCreators, dispatch),
  ...bindActionCreators(uiStateActionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
