import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import DevTools from "mobx-react-devtools"
import './home-styles.scss'

import HomeStore from './stores/pages/home'

@observer
class HomePage extends Component {

  count = () => {
    HomeStore.counter++
  }

  render () {
    return (
      <div onClick={() => this.count()} styleName='blue'>
        <DevTools />
        Counter: 
        {HomeStore.counter}
      </div>
    )
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'))