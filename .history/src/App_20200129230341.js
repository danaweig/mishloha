import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Menu from './containers/Menu/Menu';
import MenuContextProvider from './contexts/store.js';


function App() {
  return (
    <div className="App">

      <Layout>
        <MenuContextProvider>
          <Menu />
        </MenuContextProvider>
      </Layout>
    </div>
  );
}

export default App;
