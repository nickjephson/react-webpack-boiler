import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Global styles for now, will update with Root component wrapper
import globalStyles from './styles/styles.scss' //eslint-disable-line

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  HomePage,
  AboutPage,
  TopicsPage
} from '@pages'

class BasicExample extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/topics" component={TopicsPage}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<BasicExample />, document.getElementById('root'))