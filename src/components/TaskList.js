import React from 'react'
import Task from './Task'

const TaskList = props => {
  return (
    <div style={{padding: '1rem', margin: '1rem'}}>
      <div>{props.status}</div>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
