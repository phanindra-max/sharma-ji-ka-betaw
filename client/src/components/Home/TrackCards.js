import { Button } from "@material-ui/core";
import React from "react";
import "./TrackCards.css";

function TrackCards(props) {
  console.log(props.res);
  console.log(props.search.to);

  if (props.search.length > 0) {
    console.log("wdefwvrb");
    return (
      <>
        <div className="container">
          <div className="flexy">
            {props.res.map((e) => 
            (props.search===e.trackName)?(
                <div className="card_head">
                  <div className="title_card">{e.trackName}</div>
                  <div className="Description">{e.description}</div>
                  <div className="outer_btn">
                    <button className="btn_card">Show More</button>
                  </div>
                </div>
            ):(""))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="flexy">
            {props.res.map((e) => (
                <div className="card_head">
                  <div className="title_card">{e.trackName}</div>
                  <div className="Description">{e.description}</div>
                  <div className="outer_btn">
                    <button className="btn_card">Show More</button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default TrackCards;
