import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Form />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
