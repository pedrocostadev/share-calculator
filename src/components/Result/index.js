import { connect } from 'react-redux';

import Result from './result';

const mapStateToProps = ({ operations: { result } }) => ({
  text: result,
});

export default connect(mapStateToProps)(Result);
