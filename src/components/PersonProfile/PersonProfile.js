import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import HomeStore from '@stores/pages/home-store'

class PersonProfile extends Component {

  componentDidMount () {
    const { match } = this.props
    HomeStore.getPerson(match.params.personId)
  }

  render () {
    const { match } = this.props
    return (
      <div>
        <h3>{match.params.personId}</h3>
      </div>
    )
  }
}

export default PersonProfile