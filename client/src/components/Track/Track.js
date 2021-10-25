import React, { useEffect } from "react"
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/"
import axios from "axios"
// import { useDispatch, useSelector } from "react-redux";
import moment from "moment"
import { useParams, Link } from "react-router-dom"

// import { getPost, getPostsBySearch } from "../../actions/posts";
// import CommentSection from "./CommentSection";
import useStyles from "./styles"
import "./PostDetails.css"
import { useState } from "react"
import PencilImg from "./PencilImg.svg"
// const queryParams = new URLSearchParams(window.location.search);

const Track = ({ location }) => {
  const classes = useStyles()

  const [name, setName] = useState("")
  // const [subtopicArray, setSubtopicArray] = useState([])
  let subtopicArray = []
  const [subtopic1, setSubtopic1] = useState("")
  const [subtopic2, setSubtopic2] = useState("")
  const [subtopic3, setSubtopic3] = useState("")
  const [subtopic4, setSubtopic4] = useState("")
  const [trackInfo, setTrackInfo] = useState({})
  const [topicInfo, setTopicInfo] = useState([])
  let [loading, setLoading] = useState(true)
  const id = location.pathname.split("/")[2]

  const dataFetch = async () => {
    const res = await axios.get(`/api/track/${id}`)
    // console.log(res.data);
    setTrackInfo(res.data.trackDetails)
    setTopicInfo(res.data.topics)

    console.log(res)
    setLoading(false)
  }

  useEffect(() => {
    dataFetch()
  }, [])
  const func = () => {
    subtopicArray = [subtopic1, subtopic2, subtopic3, subtopic4]
  }

  return (
    <>
      {trackInfo ? "" : dataFetch}
      {topicInfo ? "" : dataFetch}
      {/* {console.log("Topic infow" + JSON.stringify(topicInfo))} */}
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Topic Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Add sub Topic
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        // id="exampleInputPassword1"
                        value={subtopic1}
                        onChange={(e) => {
                          setSubtopic1(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Add sub Topic
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        // id="exampleInputPassword1"
                        value={subtopic2}
                        onChange={(e) => {
                          setSubtopic2(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Add sub Topic
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        // id="exampleInputPassword1"
                        value={subtopic3}
                        onChange={(e) => {
                          setSubtopic3(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Add sub Topic
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        // id="exampleInputPassword1"
                        value={subtopic4}
                        onChange={(e) => {
                          setSubtopic4(e.target.value)
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={func}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className="info_container">
              <button
                className="position-fixed"
                style={{ right: 0, bottom: 0 }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Topics
                <img
                  className="form_creation_img"
                  src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0cHgiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgeD0iMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMCI+PGc+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTAgMTB2NC4wMDFoMTRWMTB6IiBmaWxsPSIjNDI4NUY0Ii8+PHBhdGggZD0iTTEwIDEwSDB2NC4wMDFoMTBMMTQuMDAxIDEweiIgZmlsbD0iI0ZCQkMwNSIvPjxwYXRoIGQ9Ik0xMCAxNGg0djEwaC00eiIgZmlsbD0iIzM0QTg1MyIvPjxwYXRoIGQ9Ik0xMCAwdjE0bDQuMDAxLTRWMHoiIGZpbGw9IiNFQTQzMzUiLz48L2c+PC9nPjwvc3ZnPg=="
                  alt=""
                />
              </button>

              <div className={classes.section}>
                <Typography variant="h4" component="h2">
                  {trackInfo.trackName}
                </Typography>
                <Typography gutterBottom variant="body1" component="p">
                  {trackInfo.description}
                </Typography>
                <Typography variant="h6">
                  Created by:
                  {trackInfo.trackDetails ? (
                    <Link
                      to={`/creators/${trackInfo.trackName}`}
                      style={{ textDecoration: "none", color: "#3f51b5" }}
                    >
                      {` ${trackInfo.trackDetails}`}
                    </Link>
                  ) : (
                    "Unknown"
                  )}
                </Typography>
                <Typography variant="body1">
                  {moment(trackInfo.createdAt).fromNow()}
                </Typography>
                <Divider style={{ margin: "20px 0" }} />
                {/* <CommentSection post={post} /> */}
                <Divider style={{ margin: "20px 0" }} />
              </div>
            </div>

            <div className="flow_chart">
              <div className="head">{trackInfo.trackName}</div>
              {topicInfo.map((e, key) => (
                <div className="block">
                  <div className="topic">
                    <div className="circle"></div>
                    <div className="outer_border">
                      <div className="title border">
                        {e.name}
                        <img className="pencil" src={PencilImg} />
                      </div>
                      <div className="sub_topics border">
                        {e.subtopics.map((subtopic) => (
                          <div className="sub_topic">{subtopic}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* repeat this */}
              {/* repeat closes here */}
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
      )}
    </>
  )
}

export default Track
