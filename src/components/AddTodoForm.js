
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Todo from '../models/Todo'

@inject('store') @observer
class AddTodoForm extends Component {

  state = {
    label: '',
    priority: ''
  }

  onChangeLabel = e => {
    this.setState({ label: e.target.value })
  }

  onChangePriority = e => {
    this.setState({ priority: e.target.value })
  }

  onAddTodo = e => {
    e.preventDefault()
    const { label, priority } = this.state
    
    if(!label || label === '')
      return
    
    const todo = new Todo(label, priority === ''? 'default': priority)
    this.props.store.todoStore.addTodo(todo)
    this.setState({ label: '', priority: '' })
  }

  render() {
    return (
      <div className='add-todo-form'>
        <form onSubmit={this.onAddTodo}>
          <input 
            type='text' 
            required 
            onChange={this.onChangeLabel} 
            value={this.state.label} 
            placeholder='To do label?' />
          <input 
            type='number' 
            onChange={this.onChangePriority} 
            value={this.state.priority} 
            min={1} 
            pattern="\d{1,5}" 
            placeholder='Prio' />
          <input 
            type='submit' 
            value='Add' />
        </form>
      </div>
    )
  }
}

export default AddTodoForm
