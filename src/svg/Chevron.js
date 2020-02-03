import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const Chevron = ({ color, ...props }) => (
  <Svg width="30" height="31" viewBox="0 0 24 25" {...props}>
    <Path
      fill={color}
      stroke={color}
      d="M12.586 12L9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L12.586 12z"
    />
  </Svg>
);

Chevron.propTypes = {
  ...Svg.propTypes,
  color: PropTypes.string.isRequired,
};

export default Chevron;
