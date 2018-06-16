import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react'

import './Person.scss'

@observer
class Person extends Component {
  render () {
    const { person } = this.props

    return (
      <div styleName='person'>
        <div styleName='photo'>
          Photo
        </div>
        <div styleName='first-name'>
          {`${person.firstName} `}
        </div>
        <span styleName='surname'>
          {person.surname}
        </span>
      </div>
    )
  }
}

export default Person