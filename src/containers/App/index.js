import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Calculator from '../Calculator';
import ShareCalculation from '../ShareCalculation';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="calculator" title="Calculator" component={Calculator} />
      <Scene
        key="shareCalculation"
        title="Share Calculation"
        component={ShareCalculation}
      />
    </Scene>
  </Router>
);

export default App;
