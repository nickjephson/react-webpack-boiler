import { observable } from 'mobx'

class HomeStore {
    @observable counter = 500;
}

const store = new HomeStore()
export default store