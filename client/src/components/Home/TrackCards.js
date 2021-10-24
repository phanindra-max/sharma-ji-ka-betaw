import { Button } from "@material-ui/core"
import React from "react"
import "./TrackCards.css"

function TrackCards(props) {
  // console.log(props.res);

  return (
    <>
      <div class="container">
        <div class="row">
          {props.res.map((e, index) => (
            <div class="col" key={index}>
              <div className="card_head">
                <div className="title_card">{e.trackName}</div>
                <div className="Description">{e.description}</div>
                <div className="outer_btn">
                  <Button
                    type="link"
                    href={"/track?id=" + e._id}
                    className="btn_card"
                  >
                    Show More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TrackCards
