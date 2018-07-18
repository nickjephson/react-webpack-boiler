import { observable } from 'mobx'

class HomeStore {
  @observable counter = 500
  @observable people = [
    {
      firstName: 'Nick',
      surname: 'Jephson'
    },
    {
      firstName: 'Another',
      surname: 'Person'
    }
  ]

  getPerson (personId) {
    return this.people.find((person) => {
      return person.firstName.toLowerCase() === personId.toLowerCase()
    })
  }
}

const store = new HomeStore()
export default store