import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Task from './components/Task';

class App extends Component {
  state = {
    taskes: {}
  };

  //this function is for adding and updating the status of a task
  addTask = task => {
    const taskes = { ...this.state.taskes };
    taskes[task.name] = task; 
    //by using the task name as the key, this function can be reused later to update the state when a task is completed 
    this.setState({ taskes });
  };

  //this function deletes taskes by setting the task value to null
  deleteTask = task => {
    const taskes = { ...this.state.taskes };
    taskes[task.name] = null;
    this.setState({ taskes })
  }


  //Checks localstorage for saved state/taskes
  componentDidMount() {
    if (localStorage.getItem("taskes")) {
      this.setState({
        taskes: JSON.parse(localStorage.getItem("taskes"))
      });
    }
  }

  //saves the state/taskes to local storage after each state update
  componentDidUpdate() {
    localStorage.setItem("taskes", JSON.stringify(this.state.taskes));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1> To Do List</h1>
            <div className="taskes">
              {/* iterating through our state to render out each of the taskes */}
              {Object.keys(this.state.taskes).map(key => (
                <Task
                  key={key}
                  task={this.state.taskes[key]}
                  complete={this.addTask}
                  delete={this.deleteTask}
                />
              ))}
            </div>
            <Form 
              add={this.addTask}
            />
          </div>
            
        </div>
      </div>  
    );
  }
}

export default App;
