import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";
import TrackCreationForm from "./components/Form/TrackCreationForm";
import TrackCards from "./components/Home/TrackCards";
import Track from "./components/Track/Track";
import UpdateTrackForm from "./components/Track/updateTrackForm";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/track/:id" exact component={Track} />
          <Route
            path={["/creators/:name", "/tags/:name"]}
            component={CreatorOrTag}
          />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route path="/form" exact component={TrackCreationForm} />
          <Route
            path="/updatetrackform/:id"
            exact
            component={UpdateTrackForm}
          />
          {/* <Route path="/ccpp" exact component={TrackCards} /> */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
