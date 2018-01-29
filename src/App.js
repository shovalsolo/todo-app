import React, { Component } from 'react';

import './App.css';

class App extends Component {

  removeTodo(index){ //a function to remove a todo with a button click to remove
    console.log(index);
    let todos = this.state.todos;
    let todo = todos.find(function(todo){
      return todo.counter === index;
    });
    
    todos.splice(todo,1);

    this.setState({
      todos: todos
    });
  }

  addTodo(event){
    event.preventDefault(); //will prevent the form to refresh when clicking the button
    let name = this.refs.name.value; //will hold the value of the name field
    let counter = this.state.counter; //will hold the value of the counter field
    
    let todo = { // an object with 3 parameters 
      name,
      counter
    };
    counter +=1; //incresing the counter for every task that wes created
    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos:todos,
      counter: counter
    })

    this.refs.todoForm.reset(); //this will clear the form fields after adding the info to the screen
  }

  doneTask(event){
    console.log(event.target.parentElement);
    event.target.parentElement.className += " red-done";
    let todos = this.state.todos;
    let todo =todos.find(function(todo){
      return todo.counter === event;
    });
  }

  constructor(){//restarting the parameters and functions
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.state ={
      todos:[], //empty array
      title:'Todo application',
      counter: 0
    }
  }

  render() { //rerendering the app
    let title = this.state.title; //setting a parameter in tha app and giving it the title
    let todos = this.state.todos; //setting a parameter in tha app and giving it the todos
    return (
      <div className="App">
        <h1 className="margin-all-ex-lar font-f-Nosifer bgcr pad-sml"> {title} </h1>
        <form ref="todoForm" className="margin-all-ex-lar" >
          <div>  
            <input className="margin-all-ex-lar" type="text" ref="name" placeholder="What to do"/>
            <button className="margin-all-ex-lar" onClick={this.addTodo}>Add todo</button>{/*will call the func todo*/}
          </div>
        </form>
          <ul className="flex flex-jus-spa-aro flex-wrap">
            {todos.map((todo =>
              <li id="app-box" className="app-box margin-all-lar" key={todo.counter}>{todo.name}
              <br/>
              <button className="margin-all-ex-lar" onClick={this.removeTodo.bind(null, todo.counter)}>Remove Todo</button>
              <br/>
                <select className="margin-all-ex-lar"  onChange={this.doneTask}>
                  <option value="No" >Not done</option>
                  <option value="Yes" >Done</option>
                </select>
              </li>))}
          </ul>   
      </div>
    );
  }
}

export default App;
