import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
    aim: "",
    resources: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({
      ...postData,
      tags: postData.tags.filter((tag) => tag !== chipToDelete),
    });
  };

  return (
    <button
      className="btn btn_create_new_track"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="Create Track"
      onClick={() => window.location.replace(`/form`)}
    >
      <img
        className="form_creation_img"
        src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0cHgiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgeD0iMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMCI+PGc+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTAgMTB2NC4wMDFoMTRWMTB6IiBmaWxsPSIjNDI4NUY0Ii8+PHBhdGggZD0iTTEwIDEwSDB2NC4wMDFoMTBMMTQuMDAxIDEweiIgZmlsbD0iI0ZCQkMwNSIvPjxwYXRoIGQ9Ik0xMCAxNGg0djEwaC00eiIgZmlsbD0iIzM0QTg1MyIvPjxwYXRoIGQ9Ik0xMCAwdjE0bDQuMDAxLTRWMHoiIGZpbGw9IiNFQTQzMzUiLz48L2c+PC9nPjwvc3ZnPg=="
        alt=""
      />
    </button>
  );
};

export default Form;
