import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, Link } from "react-router-dom";

// import { getPost, getPostsBySearch } from "../../actions/posts";
// import CommentSection from "./CommentSection";
import useStyles from "./styles";
import "./PostDetails.css";
import { useState } from "react";
import PencilImg from "./PencilImg.svg";
// const queryParams = new URLSearchParams(window.location.search);

const Track = ({ location }) => {
  const classes = useStyles();
  const id = location.pathname.split("/")[2];
  const [name, setName] = useState("");
  let subtopics = [];
  const [subtopic1, setSubtopic1] = useState("");
  const [subtopic2, setSubtopic2] = useState("");
  const [subtopic3, setSubtopic3] = useState("");
  const [subtopic4, setSubtopic4] = useState("");

  const [updateName, setUpdateName] = useState("");
  let Updatesubtopics = [];
  const [updatesubtopic1, setupdatesubtopic1] = useState("");
  const [updatesubtopic2, setupdatesubtopic2] = useState("");
  const [updatesubtopic3, setUpdateSubtopic3] = useState("");
  const [updatesubtopic4, setUpdateSubtopic4] = useState("");

  const [trackInfo, setTrackInfo] = useState({});
  const [topicInfo, setTopicInfo] = useState([]);
  const [isTrackCompleted, setIsTrackCompleted] = useState(-1);
  const [circleBorder, setCircleBorder] = useState("");
  const [topicBorder, setTopicBorder] = useState("");
  const [BtnColorChanger, setBtnColorChanger] = useState("");
  const [outerColorChanger, setOuterColorChanger] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("profile"));
  let config = {};
  if (userInfo) {
    config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
  }

  const colorGiver = () => {
    setCircleBorder("circle_border");
    setTopicBorder("topic_border");
    setBtnColorChanger("btn_color_changer");
    setOuterColorChanger("outer_border_color");
  };
  const colorTaker = () => {
    setCircleBorder("");
    setTopicBorder("");
    setBtnColorChanger("");
    setOuterColorChanger("");
  };

  const isCompletedFunc = async () => {
    if (isTrackCompleted === 0) {
      setIsTrackCompleted(1);
      colorGiver();
      const response = await axios.put(`/api/track/${id}`, config);
    } else {
      setIsTrackCompleted(0);
      colorTaker();
      const response = await axios.put(`/api/track/${id}`, config);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const res = await axios.get(`/api/track/${id}`);
    // console.log(res.data);
    await setTrackInfo(res.data.trackDetails);
    await setTopicInfo(res.data.topics);
    if (res.data.trackDetails.isCompleted) {
      setIsTrackCompleted(1);
      colorGiver();
    } else {
      setIsTrackCompleted(0);
      colorTaker();
    }
  };

  const func = async (e) => {
    e.preventDefault();
    subtopics = [subtopic1, subtopic2, subtopic3, subtopic4];
    try {
      const newTopic = {
        trackId: id,
        user: userInfo.result._id,
        name,
        subtopics,
      };
      const res = await axios.post(`/api/topic`, newTopic, config);
      // console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const func2 = async () => {
    Updatesubtopics = [
      updatesubtopic1,
      updatesubtopic2,
      updatesubtopic3,
      updatesubtopic4,
    ];
  };

  return (
    <>
      {/* {trackInfo ? "" : dataFetch}
      {topicInfo ? "" : dataFetch} */}
      {/* {console.log("Topic infow" + JSON.stringify(topicInfo))} */}
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
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

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Topic Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Add sub Topic
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      // id="exampleInputPassword1"
                      value={subtopic1}
                      onChange={(e) => {
                        setSubtopic1(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Add sub Topic
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      // id="exampleInputPassword1"
                      value={subtopic2}
                      onChange={(e) => {
                        setSubtopic2(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Add sub Topic
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      // id="exampleInputPassword1"
                      value={subtopic3}
                      onChange={(e) => {
                        setSubtopic3(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Add sub Topic
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      // id="exampleInputPassword1"
                      value={subtopic4}
                      onChange={(e) => {
                        setSubtopic4(e.target.value);
                      }}
                    />
                  </div>
                  <button type="submit" class="btn btn-primary" onClick={func}>
                    Submit
                  </button>
                </form>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
        {/* {console.log(trackInfo.user + "+track user")}
        {console.log(userInfo.result._id + "+userInfouser")} */}
        <div className={classes.card}>
          <div className="info_container">
            {userInfo && userInfo.result._id === trackInfo.user && (
              <button
                className="btn_add"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Topics
              </button>
            )}

            <div className={classes.section}>
              <Typography variant="h3" component="h2">
                {trackInfo.trackName}
              </Typography>
              <Typography gutterBottom variant="h6" component="p">
                {trackInfo.description}
              </Typography>
              {/* <Typography variant="h6">
                Created
                {trackInfo.trackDetails ? (
                  <Link
                    to={`/creators/${trackInfo.trackName}`}
                    style={{ textDecoration: "none", color: "#3f51b5" }}
                  >
                    {` ${trackInfo.trackDetails}`}
                  </Link>
                ) : (
                  "Not Found"
                )}
              </Typography> */}
              {/* {console.log(trackInfo.trackName)} */}
              <Typography variant="body1">
                Created {moment(trackInfo.createdAt).fromNow()}{" "}
                {trackInfo.creator && (
                  <Link
                    to={`/creators/${trackInfo.creator}`}
                    style={{ textDecoration: "none", color: "#3f51b5" }}
                  >
                    by {` ${trackInfo.creator}`}
                  </Link>
                )}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Divider style={{ margin: "20px 0" }} />
            </div>
          </div>

          <div className="flow_chart">
            {userInfo && userInfo.result._id === trackInfo.user && (
              <button
                className={"btn_isCompleted " + BtnColorChanger}
                onClick={isCompletedFunc}
              ></button>
            )}
            <div className="head">{trackInfo.trackName}</div>
            {topicInfo.map((e) => (
              <div className="block">
                <div className={"topic " + topicBorder}>
                  <div className={"circle " + circleBorder}></div>
                  <div className={"outer_border " + outerColorChanger}>
                    <div className="title border">{e.name}</div>
                    <div className="sub_topics border">
                      <div className="sub_topic">{e.subtopics[0]}</div>
                      <div className="sub_topic">{e.subtopics[1]}</div>
                      <div className="sub_topic">{e.subtopics[2]}</div>
                      <div className="sub_topic">{e.subtopics[3]}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Track;
