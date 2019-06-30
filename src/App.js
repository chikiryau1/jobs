import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './model/store'
import {Root, Job} from './ui/containers'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={Root}/>
            <Route exact path='/:id' component={Job}/>
          </Switch>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App;