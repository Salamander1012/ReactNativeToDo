
const INITIAL_STATE = {
  data: '',
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'get_user_data_success':
      console.log('data returned to state')
      return {...state, data:action.payload, loading: false};
    default:
      return state;

  }
}
