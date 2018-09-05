
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('store') @observer
export default class ToDoList extends Component {

  deleteTodo = (todo) => {
    this.props.store.todoStore.markTodoAsDone(todo)
  }

  render() {
    return (
      <div className='todo-list'>
        {
            this.props.store.todoStore.todos.map(todo => (
                <div className='todo' key={todo.id}>
                    {todo.priority}. { todo.label }
                    <span className='delete' onClick={() => this.deleteTodo(todo)}>x</span>
                </div>
            ))
        }
      </div>
    )
  }
}
