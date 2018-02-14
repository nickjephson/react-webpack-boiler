import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './home-styles.scss'
import { Grid, Row, Col } from 'react-flexbox-grid'

import HomeStore from '@stores'

const Home = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={6}>
        <h2 styleName='blue'>Home {HomeStore.counter}</h2>
      </Col>
      <Col xs={12} md={6}>
        <h2 styleName='blue'>Page {HomeStore.counter}</h2>
      </Col>
    </Row>
  </Grid>
)

export default Home