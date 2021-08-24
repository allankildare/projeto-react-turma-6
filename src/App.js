import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Drinks from './components/Drinks/Drinks'
import Main from './components/Main/Main'
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'

class App extends Component {
  render() {
    return (
      <div className="App">  
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/drinks" children={<Drinks />} />
            <Route path="/sobre-nos">
              <AboutUs />  
            </Route> 
            <Route path="/nosso-time">
              <h1>Nosso time</h1>
            </Route>
            <Route path="/contato">
              <Form />
            </Route>
            <Route path="*">
              <h1>Erro 404</h1>
            </Route>
          </Switch>

        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
