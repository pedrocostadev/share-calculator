import { connect } from 'react-redux';

import Operation from './operation';
import { operationsSelectors } from '../../selectors';

const mapStateToProps = state => ({
  text: operationsSelectors.selectOperation(state),
});

export default connect(mapStateToProps)(Operation);
