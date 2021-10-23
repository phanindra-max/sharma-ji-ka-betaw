import * as api from "../api/index";
import { CREATE_TASK } from "../constants/taskConstants";

export const createNewTask = (task) => async (dispatch) => {
  // try {
  //   const { data } = await api.createPost(task);
  //   dispatch({ type: CREATE_TASK, payload: { post: data } });
  // } catch (error) {
  //   console.log(error);
  // }
};
