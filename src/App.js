import React, { Component } from 'react'
import AddTodoForm from './components/AddTodoForm'
import Layout from './layouts/Layout'
import ToDoList from './components/ToDoList'

class App extends Component {
  render() {
    return (
      <Layout>
        <h2>Your todos:</h2>
        <AddTodoForm />
        <br />
        <ToDoList />
      </Layout>
    );
  }
}

export default App
