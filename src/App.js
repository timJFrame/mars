import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/shared/Home'
import Navigation from './components/shared/Navigation'
import About from './components/About'
import Photos from './components/Photos'

function App(){
  return(
    <BrowserRouter>
    <Navigation/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path ="/about" component={About}/>
      <Route path ="/photos" component={Photos}/>
    </Switch>
    </BrowserRouter>
  )
}
export default App
