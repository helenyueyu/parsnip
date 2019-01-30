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

const tasks = (state = {tasks: mockTasks}, action) => {
  return state
}

export default tasks
