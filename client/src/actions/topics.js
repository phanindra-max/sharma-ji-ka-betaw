import * as api from "../api/index"
import {
  CREATE_TOPIC,
  GET_TOPICS_BY_TRACKID,
  END_LOADING,
  START_LOADING,
} from "../constants/topicConstants"

export const getTopicsByTrackId = (trackId) => async (dispatch) => {
  try {
    const { data } = await api.getTopicsByTrackId(trackId)
    console.log(data)
    dispatch({ type: START_LOADING })
    dispatch({ type: GET_TOPICS_BY_TRACKID, payload: { data } })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}
