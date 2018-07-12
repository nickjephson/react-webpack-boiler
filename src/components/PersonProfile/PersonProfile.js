import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import { HomeStore } from '@stores/home-store'

class PersonProfile extends Component {

  componentDidMount () {
    console.log(this.props)
    HomeStore.getPerson(this.props.match.personId)
  }

  render () {
    return (
      <div>
        <h3>{match.params.personId}</h3>
      </div>
    )
  }
}

export default PersonProfile