import React, {Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import TestComponent from './components/TestComponent/TestCompnent'

export default class App extends Component {
  render() {
    return (
      <div>
				{/* These are the router link and switch
					to change scenes and route URL */}
				<Link to='/test-component'>To Test Component!</Link>
        <Switch>
          <Route exact path='/test-component' component={TestComponent}/>
        </Switch>
      </div>
    )
  }
}
