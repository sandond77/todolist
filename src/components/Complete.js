import React, { Component } from 'react'

export default class Complete extends Component {
    completeTask = event => {
        event.preventDefault();
        const task = {
            name: this.props.name,
            status: true //default is false because task is incomplete
        };
        this.props.complete(task);
    };
    
    render() {
        return (
            <button onClick={this.completeTask}> 
                <span className="glyphicon glyphicon-ok"></span> 
            </button>
        );
    }
}
