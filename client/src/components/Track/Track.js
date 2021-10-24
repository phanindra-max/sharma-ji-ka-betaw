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
const queryParams = new URLSearchParams(window.location.search);

const Track = () => {
  // const { post, posts, isLoading } = useSelector((state) => state.posts);
  // const dispatch = useDispatch();
  // const history = useHistory();
  const classes = useStyles();
  const id = queryParams.get("id");

  const dataFetch = async () => {
    const resTrack = await axios.get(`/track/${id}`);
    setTrack(resTrack.data);
  };
  const [name, setName] = useState("");
  // const [subtopicArray, setSubtopicArray] = useState([])
  let subtopicArray = [];
  const [subtopic1, setSubtopic1] = useState("");
  const [subtopic2, setSubtopic2] = useState("");
  const [subtopic3, setSubtopic3] = useState("");
  const [subtopic4, setSubtopic4] = useState("");
  const [track, setTrack] = useState({});

  const func = async () => {
    subtopicArray = [subtopic1, subtopic2, subtopic3, subtopic4];
    // console.log(subtopicArray);
    // await axios.post(`/topics`)
  };

  useEffect(() => {
    dataFetch();
  }, []);

  // const openPost = (_id) => history.push(`/posts/${_id}`);

  // const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <>
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
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
        <div className={classes.card}>
          <div className="info_container">
            <button
              className="btn_add"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Topics
            </button>

            <div className={classes.section}>
              <Typography variant="h3" component="h2">
                {track.trackName}
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                {track.description}
              </Typography>
              <Typography variant="h6">
                Created by:
                <Link
                  to={`/creators/${track.trackName}`}
                  style={{ textDecoration: "none", color: "#3f51b5" }}
                >
                  {` ${track.trackName}`}
                </Link>
              </Typography>
              <Typography variant="body1">
                {moment(track.createdAt).fromNow()}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              {/* <CommentSection post={post} /> */}
              <Divider style={{ margin: "20px 0" }} />
            </div>
          </div>

          <div className="flow_chart">
            <div className="head">Competive Coding</div>

            {/* repeat this */}
            <div className="block">
              <div className="topic">
                <div className="circle"></div>
                <div className="outer_border">
                  <div className="title border">
                    Math
                    <img className="pencil" src={PencilImg} />
                  </div>
                  <div className="sub_topics border">
                    <div className="sub_topic">math1</div>
                    <div className="sub_topic">math2</div>
                    <div className="sub_topic">math3</div>
                    <div className="sub_topic">math4</div>
                  </div>
                </div>
              </div>
            </div>
            {/* repeat closes here */}

            <div className="block">
              <div className="topic">
                <div className="circle"></div>
                <div className="outer_border">
                  <div className="title border">
                    Math
                    <img className="pencil" src={PencilImg} />
                  </div>
                  <div className="sub_topics border">
                    <div className="sub_topic">math1</div>
                    <div className="sub_topic">math2</div>
                    <div className="sub_topic">math3</div>
                    <div className="sub_topic">math4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="topic">
                <div className="circle"></div>
                <div className="outer_border">
                  <div className="title border">
                    Math
                    <img className="pencil" src={PencilImg} />
                  </div>
                  <div className="sub_topics border">
                    <div className="sub_topic">math1</div>
                    <div className="sub_topic">math2</div>
                    <div className="sub_topic">math3</div>
                    <div className="sub_topic">math4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {!!recommendedPosts.length && (
            <div className={classes.section}>
              <Typography gutterBottom variant="h5">
                You might also like:
              </Typography>
              <Divider />
              <div className={classes.recommendedPosts}>
                {recommendedPosts.map(
                  ({ title, name, message, likes, selectedFile, _id }) => (
                    <div
                      style={{ margin: "20px", cursor: "pointer" }}
                      onClick={() => openPost(_id)}
                      key={_id}
                    >
                      <Typography gutterBottom variant="h6">
                        {title}
                      </Typography>
                      <Typography gutterBottom variant="subtitle2">
                        {name}
                      </Typography>
                      <Typography gutterBottom variant="subtitle2">
                        {message}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        Likes: {likes.length}
                      </Typography>
                      <img src={selectedFile} width="200px" />
                    </div>
                  )
                )}
              </div>
            </div>
          )} */}
      </Paper>
    </>
  );
};

export default Track;
