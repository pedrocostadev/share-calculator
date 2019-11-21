import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Button from '../Button';
import styles from './styles';

// TODO: withProps

const Pad = ({ onNumberPress, onOperatorPress, onResult, onDelete, onLongDelete }) => (
  <Grid style={styles.container}>
    <Col>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="7" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="4" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="1" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="." />
      </Row>
    </Col>

    <Col>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="8" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="5" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="2" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="0" />
      </Row>
    </Col>

    <Col>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="9" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="6" />
      </Row>
      <Row>
        <Button style={styles.numberButtons} onPress={onNumberPress} title="3" />
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
        <Button style={styles.operationsButtons} onPress={onOperatorPress} title="/" />
      </Row>
      <Row>
        <Button style={styles.operationsButtons} onPress={onOperatorPress} title="*" />
      </Row>
      <Row>
        <Button style={styles.operationsButtons} onPress={onOperatorPress} title="-" />
      </Row>
      <Row>
        <Button style={styles.operationsButtons} onPress={onOperatorPress} title="+" />
      </Row>
      <Row>
        <Button style={styles.equalButton} onPress={onResult} title="=" />
      </Row>
    </Col>
  </Grid>
);

Pad.propTypes = {
  onNumberPress: PropTypes.func.isRequired,
  onOperatorPress: PropTypes.func.isRequired,
  onResult: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Pad;
