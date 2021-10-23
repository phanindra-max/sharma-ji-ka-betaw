import React from "react";
import { useState } from "react";
import axios from "axios";

function TrackCreationForm() {
  const [trackName, setTrackName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [estimatedCompletionDate, setEstimatedCompletionDate] = useState("");
  const [description, setDescription] = useState("");

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${userInfo.token}`,
  //   },
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const trackForm = {
        trackName,
        startDate,
        estimatedCompletionDate,
        description,
      };
      await axios.post(`/posts`, trackForm);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Goal
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setTrackName(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Start Date
            </label>
            <input
              type="date"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              End Date
            </label>
            <input
              type="date"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEstimatedCompletionDate(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          {/* <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Topic 1
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setTopic1(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Topic 2
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setTopic2(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Topic 3
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setTopic3(e.target.value);
              }}
            />
          </div> */}

          <button type="submit" class="btn btn-primary">
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
