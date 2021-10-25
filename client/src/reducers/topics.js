import {
  GET_TOPICS_BY_TRACKID,
  ADD_TOPICS,
  START_LOADING,
  END_LOADING,
} from "../constants/topicConstants"

export default (state = { isLoading: true, topics: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case GET_TOPICS_BY_TRACKID:
      return {
        ...state,
        topics: action.payload.data,
      }
    case ADD_TOPICS:
      return state
    default:
      return state
  }
}
