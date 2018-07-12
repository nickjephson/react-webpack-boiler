import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import './people-page-styles.scss'

import {
  Link,
  Route,
  BrowserRouter
} from 'react-router-dom'

import { HomeStore } from '@stores/home-store'

import { Person } from '@components/Person'
import { PersonProfile } from '@components/PersonProfile'

@observer
class PeoplePage extends Component {

  renderList = ( match ) => {
    console.log('match inside renderList', match)
    return (
      <Route exact path={match.url} render={() => (
        this.renderPeople(HomeStore.people)
      )}/>
    )
  }

  renderIndividual = ( match ) => {
    return (
      <Route path={`${match.url}/:personId`} component={PersonProfile}/>
    )
  }

  renderPeople = (people) => {
    return people.map((item, i) => {
      return (
        <Link to={`${this.props.match.url}/${item.firstName}`} key={i}>
          <Person person={item} key={i} />
        </Link>
      )
    })
  }

  render () {
    const { match } = this.props
    console.log(this.props)
    return (
      <div>
        <h2>People</h2>
        <BrowserRouter>
          <div>
            <div styleName='people'>
              {this.renderList(match)}
            </div>
            {this.renderIndividual(match)}
            <Route exact path={match.url} render={() => (
              <h3>Please select a person.</h3>
            )}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default PeoplePage