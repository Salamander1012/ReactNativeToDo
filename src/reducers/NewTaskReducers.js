

const INITIAL_STATE = {
  taskName: '',
  date: null,
  group: null,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'task_name_changed':
      console.log('task name changed')
      return {...state, taskName: action.payload};
    case 'group_changed':
      console.log('group changed')
      return {...state, group: action.payload};
    case 'date_changed':
      console.log('date changed to ' + action.payload.toString() )
      return {...state, date: action.payload.toString()};
    case 'task_create_attempting':
      console.log('attempting task create')
      return {...state, ...INITIAL_STATE};
    case 'clear_fields':
      console.log('clear fields')
      return {...state, ...INITIAL_STATE};
    default:
      return state;

  }
}
