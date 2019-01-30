import React, { Component } from 'react';
import TasksPage from './components/TasksPage'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'
import './App.css';



class App extends Component {
  render() {
    return (
      <Container style={{marginTop: '10vh'}}>
        <TasksPage tasks={this.props.tasks} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
