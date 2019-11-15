import { connect } from 'react-redux';

import NavBar from './navbar';
import { operationsSelectors } from '../../selectors';

const mapStateToProps = state => ({
  screenText: operationsSelectors.selectOperationWithResult(state),
});

export default connect(mapStateToProps)(NavBar);
