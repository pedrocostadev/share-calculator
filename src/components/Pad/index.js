import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Button from '../Button';
import styles from './styles';

const Pad = ({ onNumberPress, onOperatorPress, onResult, onDelete, onLongDelete }) => {
  const NumberButton = ({ title }) => (
    <Button style={styles.numberButtons} onPress={onNumberPress} title={title} />
  );

  const OperatorButton = ({ title }) => (
    <Button style={styles.operationsButtons} onPress={onOperatorPress} title={title} />
  );

  return (
    <Grid style={styles.container}>
      <Col>
        <Row>
          <NumberButton title="7" />
        </Row>
        <Row>
          <NumberButton title="4" />
        </Row>
        <Row>
          <NumberButton title="1" />
        </Row>
        <Row>
          <NumberButton title="." />
        </Row>
      </Col>

      <Col>
        <Row>
          <NumberButton title="8" />
        </Row>
        <Row>
          <NumberButton title="5" />
        </Row>
        <Row>
          <NumberButton title="2" />
        </Row>
        <Row>
          <NumberButton title="0" />
        </Row>
      </Col>

      <Col>
        <Row>
          <NumberButton title="9" />
        </Row>
        <Row>
          <NumberButton title="6" />
        </Row>
        <Row>
          <NumberButton title="3" />
        </Row>
        <Row>
          <Button
            style={styles.numberButtons}
            onPress={onDelete}
            onLongPress={onLongDelete}
            title="DEL"
          />
        </Row>
      </Col>

      <Col>
        <Row>
          <OperatorButton title="/" />
        </Row>
        <Row>
          <OperatorButton title="*" />
        </Row>
        <Row>
          <OperatorButton title="-" />
        </Row>
        <Row>
          <OperatorButton title="+" />
        </Row>
        <Row>
          <Button style={styles.equalButton} onPress={onResult} title="=" />
        </Row>
      </Col>
    </Grid>
  );
};

Pad.propTypes = {
  onNumberPress: PropTypes.func.isRequired,
  onOperatorPress: PropTypes.func.isRequired,
  onResult: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Pad;
