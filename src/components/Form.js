import React, { Component } from 'react'

export default class Form extends Component {
    taskRef = React.createRef();

    taskAdder = event => {
      event.preventDefault();
      const task = {
        name: this.taskRef.current.value,
        status: false //default is false because task is incomplete
      }
      this.props.add(task);
      event.currentTarget.reset();
    };

  render() {
    return (
        <form className="form" onSubmit={this.taskAdder}>
            <input
                name="task"
                type="text"
                ref={this.taskRef}
                placeholder="newTask"
            />
            <button type="submit">Add</button>
        </form>
    )
  }
}
