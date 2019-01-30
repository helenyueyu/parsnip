import React from 'react'


const Task = props => {
  return (
    <div style={{paddingTop: '5rem'}}>
      <div>
        <div>{props.task.title}</div>
      </div>
      <hr/>
      <div>{props.task.description}</div>
    </div>
  )
}

export default Task
