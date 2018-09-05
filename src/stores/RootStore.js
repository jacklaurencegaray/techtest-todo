
import TodoStore from './TodoStore'

class GlobalStore {
    constructor() {
        this.todoStore = new TodoStore(this)
    }
}

export default new GlobalStore()
