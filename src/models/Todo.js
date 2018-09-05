
class Todo {

    constructor(label, priority) {
        this.id = null
        this.label = label

        // If priority is set then set item's priority, if not, use default which means 'insert last'
        if(priority)
            this.priority = priority
        else
            this.priority = 'default'
    }

}

export default Todo
