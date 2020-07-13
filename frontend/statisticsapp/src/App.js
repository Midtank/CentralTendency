import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import {connect} from 'react-redux';
function App() {
  return (
    <Dashboard/>
  );
}

export default connect()(App);
