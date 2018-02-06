import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import HomeStore from '@stores'

const Home = () => (
  <div>
    <h2>Home {HomeStore.counter}</h2>
  </div>
)

export default Home