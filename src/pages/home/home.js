import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './home-styles.scss'

import HomeStore from '@stores'

const Home = () => (
  <div>
    <h2 styleName='blue'>Home {HomeStore.counter}</h2>
  </div>
)

export default Home