import React from "react";
import axios from "axios";
import { useState } from "react";

function UpdateTrackForm({ location }) {
  const [updateName, setUpdateName] = useState("");
  let updateSubtopics = [];
  const [updatesubtopic1, setupdatesubtopic1] = useState("");
  const [updatesubtopic2, setupdatesubtopic2] = useState("");
  const [updatesubtopic3, setUpdateSubtopic3] = useState("");
  const [updatesubtopic4, setUpdateSubtopic4] = useState("");
  const id = location.pathname.split("/")[2];
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const func2 = async (e) => {
    e.preventDefault();
    updateSubtopics = [
      updatesubtopic1,
      updatesubtopic2,
      updatesubtopic3,
      updatesubtopic4,
    ];
    const updatedTopic = {
      name: updateName,
      subtopics: updateSubtopics,
    };

    console.log(updatedTopic);
    const response = await axios(`/api/topic/${id}`, updatedTopic, config);
    console.log(response.data);
  };

  const [topicInfo, setTopicInfo] = useState([]);

  return (
    <>
      <div className="container col-mg-6">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Updated Topic Name
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              value={updateName}
              onChange={(e) => {
                setUpdateName(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Update sub Topic
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputPassword1"
              value={updatesubtopic1}
              onChange={(e) => {
                setupdatesubtopic1(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Upadate sub Topic
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputPassword1"
              value={updatesubtopic2}
              onChange={(e) => {
                setupdatesubtopic2(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Update sub Topic
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputPassword1"
              value={updatesubtopic3}
              onChange={(e) => {
                setUpdateSubtopic3(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Update sub Topic
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputPassword1"
              value={updatesubtopic4}
              onChange={(e) => {
                setUpdateSubtopic4(e.target.value);
              }}
            />
          </div>
          <button class="btn btn-primary" onClick={func2}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateTrackForm;
