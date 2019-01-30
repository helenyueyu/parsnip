import React, { Component } from 'react'
import TaskList from './TaskList'

import { Card } from 'semantic-ui-react'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

class TasksPage extends Component {
  renderTaskLists() {
    const { tasks } = this.props
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status)
      return (
        <Card>
        <TaskList key={status} status={status} tasks={statusTasks} />
        </Card>
      )
    })
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
          {this.renderTaskLists()}
      </div>
    )
  }
}

export default TasksPage
