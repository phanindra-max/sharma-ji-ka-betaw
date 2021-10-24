import React from "react";
import "./TrackCards.css";

function TrackCards(props) {
  // console.log(props.res);
  return (
    <>
      <div class="container">
        <div class="row">
          {props.res.map((e) => (
            <div class="col">
              <div className="card_head">
                <div className="title_card">{e.trackName}</div>
                <div className="Description">{e.description}</div>
                <div className="outer_btn">
                  <button className="btn_card">Show More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrackCards;
