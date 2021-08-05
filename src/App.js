import React, { Component } from 'react'
import Button from './components/Button/Button'
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import GridExample from './components/GridExample/GridExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <h1>Olá mundo!</h1>
          <Form />
          <GridExample />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
