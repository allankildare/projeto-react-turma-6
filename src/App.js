import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Drinks from './components/Drinks/Drinks'
import Main from './components/Main/Main'
import OurTeam from './components/OurTeam/OurTeam'
import AboutUs from './components/AboutUs/AboutUs'
import SubDrinks from './components/Drinks/SubDrinks'
import UserProvider from './components/UserProvider/UserProvider'
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

function App() {
    return (
      <div className="App">  
        <Router>
          <Header />
          <UserProvider>
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/drinks" exact>
                <Drinks />
              </Route>
              <Route path="/drinks/:subpagina">
                <SubDrinks />
              </Route>
              <Route path="/sobre-nos" exact>
                <AboutUs />  
              </Route> 
              <Route path="/nosso-time" exact>
                <OurTeam />
              </Route>
              <Route path="/contato" exact>
                <Form />
              </Route>
              <Route path="*">
                <h1>Erro 404</h1>
              </Route>
            </Switch>
          </UserProvider>

        </Router>
        <Footer />
      </div>
    )
}

export default App
