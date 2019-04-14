import React, { Component } from 'react'

export default class Delete extends Component {
    deleteTask = event => {
        event.preventDefault();
        this.props.delete(this.props.task)
    };
    
    render() {
        return (
            <button onClick={this.deleteTask}>
                <span className="glyphicon glyphicon-remove"></span> 
            </button>
        );
    }
}
