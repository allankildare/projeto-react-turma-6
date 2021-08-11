import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Form />
        <Button texto="Turma 6" />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
