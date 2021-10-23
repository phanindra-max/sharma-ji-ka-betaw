import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory, Link } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";
import useStyles from "./styles";
import "./PostDetails.css";
import { useState } from "react";

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [subtopic, setSubtopic] = useState([]);
  let adder;

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
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
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
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
                    value={adder}
                    onChange={(e)=>{setSubtopic(subtopic.push(adder))}}
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
                    value={adder}
                    onChange={(e)=>{setSubtopic(subtopic.push(adder))}}
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
                    value={adder}
                    onChange={(e)=>{setSubtopic(subtopic.push(adder))}}
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
                    value={adder}
                    onChange={(e)=>{setSubtopic(subtopic.push(adder))}}
                  />
                </div>
                <button type="submit" class="btn btn-primary" onClick={()=>console.log(subtopic,name)}>
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className={classes.card}>
        <div
          className="info_container"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <button className="btn_add">Add Topics</button>
          {/* <div
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
                        // value={name}
                        // onChange={(e)=>setName(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Add Sub Topic
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        value={adder}
                        onChange={(e) => setSubtopic(subtopic.push(adder))}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Add Sub Topic
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        value={adder}
                        onChange={(e) => setSubtopic(subtopic.push(adder))}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Add Sub Topic
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        value={adder}
                        onChange={(e) => setSubtopic(subtopic.push(adder))}
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={() => console.log(subtopic)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div className={classes.section}>
            <Typography variant="h3" component="h2">
              {post.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              component="h2"
            >
              {post.tags.map((tag) => (
                <Link
                  to={`/tags/${tag}`}
                  style={{ textDecoration: "none", color: "#3f51b5" }}
                >
                  {` #${tag} `}
                </Link>
              ))}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {post.message}
            </Typography>
            <Typography variant="h6">
              Created by:
              <Link
                to={`/creators/${post.name}`}
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                {` ${post.name}`}
              </Link>
            </Typography>
            <Typography variant="body1">
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <CommentSection post={post} />
            <Divider style={{ margin: "20px 0" }} />
          </div>
        </div>
        {/* <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div> */}

        <div className="flow_chart">
          <div className="head">Competive Coding</div>
          <div className="block">
            <div className="topic">
              <div className="circle"></div>
              <div className="outer_border">
                <div className="title border">Math</div>
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
                <div className="title border">Math</div>
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
                <div className="title border">Math</div>
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
                <div className="title border">Math</div>
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
      {!!recommendedPosts.length && (
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
      )}
    </Paper>
  );
};

export default Post;
