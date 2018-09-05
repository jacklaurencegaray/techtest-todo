
import { observable, toJS } from 'mobx'
import uuid from 'uuid/v1'

class TodoStore {

    @observable todos = []
    lastId = 0

    addTodo(todo) {
        // Generate a unique ID for the todo item
        todo.id = uuid()
        if(todo.priority === 'default' || this.todos.length <= 1) {
            // Generate priority number for the default priority type
            // appends todo item to the end of the todo list
            todo.priority = this.todos.length
            // Add todo item to the todo list
            this.todos.push(todo)
        } else {
            console.log('insert here')
            // Linearly O(n) find the position where the todo item should be inserted in based on
            // priority number
            let i = 0;
            for(; i < this.todos.length; i++) {
                if(toJS(this.todos[i]).priority >= todo.priority) {
                    break;
                }
            }
            
            console.log(todo)
            this.todos = toJS(this.todos).splice(i, 0, todo)
        }
    }

    markTodoAsDone(todo) {
        const targetTodo = toJS(todo)
        // find todo with that ID and delete
        return toJS(this.todos).find((element, index) => {
            if(element.id === targetTodo.id) {
                this.todos.splice(index, 1)
                return true
            }
            return false
        }) 
    }

}

export default TodoStore
