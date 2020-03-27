import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import styles from './styles'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Main from './pages/Main'
import Tos from './pages/Tos'
import Privacy from './pages/Privacy'
import License from './pages/License'
import Wonderbot from './pages/Wonderbot'
import Team from './pages/Team'
import Join from './pages/JoinTeam'

const App = props => {
  return (
      <Router>
        <Navbar />
        <br/>
        
        <Switch>
        <Route path='/team/about'> <Team/> </Route>
        <Route path='/team/join'> <Join/> </Route>
        <div className='ui container'>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route path='/tos'> <Tos/> </Route>
          <Route path='/privacy'> <Privacy/> </Route>
          <Route path='/license'> <License/> </Route>
          {/*About*/}
          {/*Projects*/}
          <Route path='/projects/wonderbot'> <Wonderbot/> </Route>
          </div>

          </Switch>

          <Footer/>
      </Router>
  )
}

export default App
