import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Typography, CircularProgress, Grid, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import TrackCards from "../Home/TrackCards";
import axios from "axios";
// import Post from '../Posts/Post/Post';
// import { getPostsByCreator, getPostsBySearch } from "../../actions/posts";

const CreatorOrTag = ({ location }) => {
  const [response, setResponse] = useState([]);
  let array = [];
  // const dispatch = useDispatch();
  const { name } = useParams();

  const id = location.pathname.split("/")[3];
  const asyncFunc = async () => {
    const res = await axios.get(`api/track`);
    setResponse(res.data);
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i]._id === id) {
        array.push(res.data[i]);
      }
    }
    res.data.map((e) => {});
  };
  useEffect(() => {
    asyncFunc();
  }, []);

  console.log(array + "Array this is");
  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      <Divider style={{ margin: "20px 0 50px 0" }} />

      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <TrackCards res={array} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatorOrTag;
