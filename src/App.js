import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import styles from './styles'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Main from './pages/Main'
import Tos from './pages/Tos'
import Privacy from './pages/Privacy'
import Wonderbot from './pages/Wonderbot'

const App = props => {
  return (
      <Router>
        <Navbar />
        <br/>
        
        <Switch>
        <Route path='/projects/wonderbot'> <Wonderbot/> </Route>
        <div className='ui container'>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route path='/tos'> <Tos/> </Route>
          <Route path='/privacy'> <Privacy/> </Route>
          </div>
          {/*Projects*/}
          </Switch>

          <Footer/>
      </Router>
  )
}

export default App
