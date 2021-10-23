import React from "react"
import { useState } from "react"

function TrackCreationForm() {
  const [goal, setGoal] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [topic1, setTopic1] = useState("")
  const [topic2, setTopic2] = useState("")
  const [topic3, setTopic3] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    const trackForm = {
      goal,
      startDate,
      endDate,
      description,
      topic1,
      topic2,
      topic3,
    }
    //   dispatch(createPriceCard(trackForm));
  }
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Goal
            </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value)
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
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value)
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
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value)
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
                setDescription(e.target.value)
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Topic 1
            </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={topic1}
              onChange={(e) => {
                setTopic1(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Topic 2
            </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={topic2}
              onChange={(e) => {
                setTopic2(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Topic 3
            </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={topic3}
              onChange={(e) => {
                setTopic3(e.target.value)
              }}
            />
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
  )
}

export default TrackCreationForm
