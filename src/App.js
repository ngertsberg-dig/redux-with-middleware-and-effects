import React from 'react';
import logo from './logo.svg';
import DomainRoute from './domains/domains';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <DomainRoute />
      </div>
    </Provider>
  );
}

export default App;
