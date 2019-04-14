import React, { Component } from 'react'
import Complete from './Complete';
import Delete from './Delete';

export default class Task extends Component {
  render() {
    return (
      <div>
        {/* this conditional prevents errors by only rendering out the tasks if they exists */}
        {(!this.props.task) ? null :
          // using a ternary to conditional set the classname on our task display. The task will get a strikethrough effect if completed
          <div className={(this.props.task.status ? 'complete' : 'uncomplete')}>  
            {this.props.task.name} 
            <Complete 
              name={this.props.task.name}
              complete={this.props.complete} 
            />
            <Delete 
              task={this.props.task}
              delete={this.props.delete}
            />
          </div>
        }
      </div>
    )
  }
}
