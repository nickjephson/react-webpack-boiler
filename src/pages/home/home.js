import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {
  Link,
  Route,
  BrowserRouter
} from 'react-router-dom'

import { observer } from 'mobx-react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { HomeStore } from '@stores'

import { Person } from '@components'

@observer
class Home extends Component {

  render () {
    const { match } = this.props
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h2>Home Page</h2>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home