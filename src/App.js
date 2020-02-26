import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import RestContainer from './containers/RestContainer/RestContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <RestContainer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
