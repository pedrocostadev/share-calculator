import { connect } from 'react-redux';

import NavBar from './navbar';
import { screenContentToText } from '../../utils';

const mapStateToProps = ({ operations }) => ({
  screenText: screenContentToText(operations),
});

export default connect(mapStateToProps)(NavBar);
