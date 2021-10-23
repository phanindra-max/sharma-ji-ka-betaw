import React from "react";
import { useState } from "react";

function TrackCreationForm() {
    const [goal, setGoal] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [description, setDescription] = useState("")
    const [topic1, setTopic1] = useState("")
    const [topic2, setTopic2] = useState("")
    const [topic3, setTopic3] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
          const trackForm = {
            goal,
            startDate,
            endDate,
            description,
            topic1,
            topic2,
            topic3
          };
        //   dispatch(createPriceCard(trackForm));
      };
  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Goal
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={goal}
              onChange={(e)=>{setGoal(e.target.value)}}
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
              value={startDate}
              onChange={(e)=>{setStartDate(e.target.value)}}
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
              value={endDate}
              onChange={(e)=>{setEndDate(e.target.value)}}

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
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Topic 1
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={topic1}
              onChange={(e)=>{setTopic1(e.target.value)}}
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
              
              value={topic2}
              onChange={(e)=>{setTopic2(e.target.value)}}
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
              value={topic3}
              onChange={(e)=>{setTopic3(e.target.value)}}
            />
          </div>

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
