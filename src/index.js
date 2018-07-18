import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'

// Global styles for now, will update with Root component wrapper
import globalStyles from './styles/styles.scss'

import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import HomePage from '@pages/home'
import AboutPage from '@pages/about'
import TopicsPage from '@pages/topics'
import PeoplePage from '@pages/PeoplePage'

class BasicExample extends Component {
  render () {
    return (
      <BrowserRouter>
        <Grid>
          <Row>
            <Col xs={12}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/people">People</Link></li>
              </ul>

              <hr/>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/topics" component={TopicsPage}/>
                <Route path="/people" component={PeoplePage}/>
              </Switch>
            </Col>
          </Row>
        </Grid>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<BasicExample />, document.getElementById('root'))