import React, { useState, useEffect } from "react"
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"

import { getPostsBySearch } from "../../actions/posts"
import Posts from "../Posts/Posts"
import Form from "../Form/Form"
import Pagination from "../Pagination"
import useStyles from "./styles"
import searchImg from "./searchImg.svg"
import "./Home.css"
import TrackCards from "./TrackCards"
import axios from "axios"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
const Home = () => {
  const classes = useStyles()
  const query = useQuery()
  const page = query.get("page") || 1
  const searchQuery = query.get("searchQuery")

  const [currentId, setCurrentId] = useState(0)
  const [response, setResponse] = useState([])
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])

  const history = useHistory()

  useEffect(() => {
    if (response.length === 0) {
      asyncFunc()
    }
  }, [])

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }))
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      )
    } else {
      history.push("/")
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost()
    }
  }
  const asyncFunc = async () => {
    const res = await axios.get(`api/track`)
    setResponse(res.data)
  }
  // console.log(response);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            {/* <Posts setCurrentId={setCurrentId} /> */}

            {response.length > 0 ? <TrackCards res={response} /> : asyncFunc}
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <div className="button_submit">
                <img
                  className="btn_img"
                  src={searchImg}
                  alt=""
                  srcset=""
                  onClick={searchPost}
                />

                <TextField
                  onKeyDown={handleKeyPress}
                  name="search"
                  variant="outlined"
                  label="Search Memories"
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant="contained"
                color="primary"
              >
                Search
              </Button> 
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Paper
                style={{ display: "none" }}
                className={classes.pagination}
                elevation={6}
              >
                <Pagination page={page} />
              </Paper>
            )}
          </Grid> */}
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
