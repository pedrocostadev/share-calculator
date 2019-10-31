import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row, Grid} from 'react-native-easy-grid';

import Button from '../Button';

const Pad = ({onPress}) => (
  <Grid>
    <Row>
      <Col>
        <Button onPress={onPress} title="7" />
      </Col>
      <Col>
        <Button onPress={onPress} title="8" />
      </Col>
      <Col>
        <Button onPress={onPress} title="9" />
      </Col>
      <Col>
        <Button onPress={onPress} title="/" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button onPress={onPress} title="4" />
      </Col>
      <Col>
        <Button onPress={onPress} title="5" />
      </Col>
      <Col>
        <Button onPress={onPress} title="6" />
      </Col>
      <Col>
        <Button onPress={onPress} title="*" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button onPress={onPress} title="1" />
      </Col>
      <Col>
        <Button onPress={onPress} title="2" />
      </Col>
      <Col>
        <Button onPress={onPress} title="3" />
      </Col>
      <Col>
        <Button onPress={onPress} title="-" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button onPress={onPress} title="," />
      </Col>
      <Col>
        <Button onPress={onPress} title="0" />
      </Col>
      <Col>
        <Button onPress={onPress} title="DEL" />
      </Col>
      <Col>
        <Button onPress={onPress} title="=" />
      </Col>
    </Row>
  </Grid>
);

Pad.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Pad;
