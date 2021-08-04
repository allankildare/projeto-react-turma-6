import React, { Component } from 'react'
import Button from './components/Button/Button'
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Olá mundo!</h1>
        <Form />
        <Footer />
      </div>
    )
  }
}

export default App;
