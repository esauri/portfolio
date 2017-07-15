import { UPDATE_LOCATION, ROUTING_TRANSITION_OUT, ROUTING_TRANSITION_RESET } from './../constants';

const initialState = {
  transition: false,
};

function routingReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      return { ...state, location: action.payload }
    case ROUTING_TRANSITION_OUT:
      return { ...state, transition: action.payload };
    case ROUTING_TRANSITION_RESET:
      return { ...state, transition: false };
    default:
      return state;
  }
}

export default routingReducer;
