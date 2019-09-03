import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PageRoute from './pageRoutes/PageRoute';
//import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageRoute />
      </div>
    </Provider>
  );
}

export default App;
