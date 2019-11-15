import { connect } from 'react-redux';

import Result from './result';
import { operationsSelectors } from '../../selectors';

const mapStateToProps = state => ({
  text: operationsSelectors.selectResult(state),
});

export default connect(mapStateToProps)(Result);
