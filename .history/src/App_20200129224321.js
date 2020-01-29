import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Menu from './containers/Menu/Menu';
import menuContextProvider from './contexts/store.js';

function App() {
  return (
    <div className="App">

      <Layout>
        <menuContextProvider>
        <Menu />
        </menuContextProvider>
      </Layout>
    </div>
  );
}

export default App;
