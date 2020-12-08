import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './style/global.scss';
import Header from './cmps/Header'
import Home from './pages/Home'
import Footer from './cmps/Footer'



function App() {
  return (
    <div className="App flex column align-center">
      <Header />
      <Switch>
        <Route component={Home} path='/' />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
