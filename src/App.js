import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Search from './components/search';


class App extends Component {
  render() {
    return (
   <>
    <Header />
    <Search />
   </>
    );
  }
}

export default App;
