import axios from "axios";
import React from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createNewTask } from "../../actions/tasks";
function TrackCreationForm() {
  const [trackName, setTrackName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [estimatedCompletionDate, setEstimatedCompletionDate] = useState("");
  const [description, setDescription] = useState("");
  // const [topic1, setTopic1] = useState("");
  // const [topic2, setTopic2] = useState("");
  // const [topic3, setTopic3] = useState("");
  // const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        user: user.result._id,
        trackName,
        startDate,
        estimatedCompletionDate,
        description,
      };
      await axios.post(`api/track`, newPost, config);
      window.location.replace(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container col-lg-6">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Track Name
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={trackName}
              onChange={(e) => {
                setTrackName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              aria-describedby="emailHelp"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              aria-describedby="emailHelp"
              value={estimatedCompletionDate}
              onChange={(e) => {
                setEstimatedCompletionDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default TrackCreationForm;
