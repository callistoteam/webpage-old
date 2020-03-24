import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Main from './pages/Main'
import Tos from './pages/Tos'
import Privacy from './pages/Privacy'

const App = props => {
  return (
      <Router>
        <Navbar />
        <br/>
        <div className='ui container'>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route path='/tos'> <Tos/> </Route>
          <Route path='/privacy'> <Privacy/> </Route>
          </Switch>
          </div>
          <Footer/>
      </Router>
  )
}

export default App
