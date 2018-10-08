import React, { Component } from 'react';
import './App.css';

import Card from "./card/card";

import { connect } from "react-redux";
import * as Actions from "./store/Actions";

class App extends Component {
  state = {
    todoName : null
  }

  inputChange = () => {
    var name = document.getElementById("new-todo-name").value
    document.getElementById("new-todo-name").value = ""
    if(name !== "") {
      this.props.addTodo(name)
    }
  }
  componentDidMount(){
    this.props.fetchTodos()
  }
  render() {
    console.table(this.props.todos)
    var listoftodosNotCompleted = (
      <ul className="Todolist">
        {this.props.todos.map((todo)=> {
          if(todo.completed !== true) {
            var card = (<Card 
                      key={todo._id} 
                      name={todo.name}
                      star={todo.star}
                      complete={todo.completed} 
                      starTodo={()=>this.props.starTodo(todo._id,todo.star)}
                      completeTodo={()=>this.props.completeTodo(todo._id,todo.completed)}
                      removeTodo={()=>this.props.removeTodo(todo._id)}/>)
          }return card})}
      </ul>
    );
    var listoftodosCompleted = (
      <ul className="Todolist">
        {this.props.todos.map((todo)=> {
          if(todo.completed === true) {
            var card = (<Card 
                      key={todo._id} 
                      name={todo.name}
                      star={todo.star}
                      complete={todo.completed} 
                      starTodo={()=>this.props.starTodo(todo._id,todo.star)}
                      completeTodo={()=>this.props.completeTodo(todo._id,todo.completed)}
                      removeTodo={()=>this.props.removeTodo(todo._id)}/>) 
          }return card})}
      </ul>
    );
    return (
      <div className="App">
        <input placeholder="Add Todo ..." className="input-box" id="new-todo-name"/>
        <button onClick={this.inputChange} className="addTodo">ADD</button>
        <p className="header">Todos</p>
        {listoftodosNotCompleted}
        <p className="header">Completed</p>
        {listoftodosCompleted}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    todos : state.todos,
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    fetchTodos: () => dispatch(Actions.fetchTodos()),
    addTodo : (name) => dispatch(Actions.addTodoAsync(name)),
    starTodo : (id,isStar) => dispatch(Actions.starTodoAsync(id,isStar)),
    completeTodo : (id,isCompleted) => dispatch(Actions.completeTodoAsync(id,isCompleted)),
    removeTodo : (id) => dispatch(Actions.removeTodoAsync(id))
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
