import React, { Component } from 'react';
import TasksPage from './components/TasksPage'

import { Container } from 'semantic-ui-react'

import './App.css';

const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The whole nine yards',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Duet with Mika',
    description: 'Possibly in the future',
    status: 'In Progress'
  }
]

class App extends Component {
  render() {
    return (
      <Container style={{marginTop: '10vh'}}>
        <TasksPage tasks={mockTasks} />
      </Container>
    );
  }
}

export default App;
