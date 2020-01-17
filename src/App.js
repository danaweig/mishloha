import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Menu from './containers/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu />
      </Layout>
    </div>
  );
}

export default App;
