import React, { useEffect } from "react";
// import {
//   Paper,
//   Typography,
//   CircularProgress,
//   Divider,
// } from "@material-ui/core/";
// import { useDispatch, useSelector } from "react-redux";
// import moment from "moment";
// import { useParams, useHistory, Link } from "react-router-dom";

// import { getPost, getPostsBySearch } from "../../actions/posts";
// import CommentSection from "./CommentSection";
// import useStyles from "./styles";
// import "./PostDetails.css";
// import { useState } from "react";
// import PencilImg from "./PencilImg.svg";

const Post = () => {
  // const { post, posts, isLoading } = useSelector((state) => state.posts);
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const classes = useStyles();
  // const { id } = useParams();

  // const [name, setName] = useState("");
  // // const [subtopicArray, setSubtopicArray] = useState([])
  // let subtopicArray = [];
  // const [subtopic1, setSubtopic1] = useState("");
  // const [subtopic2, setSubtopic2] = useState("");
  // const [subtopic3, setSubtopic3] = useState("");
  // const [subtopic4, setSubtopic4] = useState("");

  // const func = () => {
  //   subtopicArray = [subtopic1, subtopic2, subtopic3, subtopic4];
  //   console.log(subtopicArray);
  // };
  // useEffect(() => {
  //   dispatch(getPost(id));
  // }, [id]);

  // useEffect(() => {
  //   if (post) {
  //     dispatch(
  //       getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
  //     );
  //   }
  // }, [post]);

  // if (!post) return null;

  // const openPost = (_id) => history.push(`/posts/${_id}`);

  // if (isLoading) {
  //   return (
  //     <Paper elevation={6} className={classes.loadingPaper}>
  //       <CircularProgress size="7em" />
  //     </Paper>
  //   );
  // }

  // const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return <></>;
};

export default Post;
