import { connect } from 'react-redux';

import Operation from './operation';

const mapStateToProps = ({ operations: { leftValue, operator, rightValue } }) => ({
  text: `${leftValue} ${operator} ${rightValue}`,
});

export default connect(mapStateToProps)(Operation);
