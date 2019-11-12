import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import Calculator from '../Calculator';
import NavBar from '../../components/Navbar';
import configureStore from '../../store';

const store = configureStore();
// const RouterWithRedux = connect()(Router)

const App = () => (
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="calculator" title="Calculator" component={Calculator} navBar={NavBar} />
      </Scene>
    </Router>
  </Provider>
);

export default App;
