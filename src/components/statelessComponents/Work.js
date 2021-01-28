import React, { useRef } from "react";
import "./MyWorks.scss";

const Work = (props) => {
  //variables for selecting DOM nodes
  let wrapper = useRef(null);

  return (
    <div className="work-container">
      {/* project start */}
      {/* this div immediately below just reverses the layout of the card if it is odd  */}
      <div
        className={`work-wrapper ${
          props.id % 2 === 0 ? "work-wrapper-even" : "work-wrapper-odd"
        }`}
      >
        <div className="card-info">
          <div>
            <h2>{props.name}.</h2>
            <p className="intro"> {props.intro}. </p>
            <p className="tags">
              <span className="solid_tag">Tags: </span>{" "}
              <span className="tag_items">{props.tag}.</span>
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="header-image">
            <img src={`${props.imageUrl}`} alt="" className="img" />
          </div>

          <div className="body_post" ref={(el) => (wrapper = el)}>
            <div className="butn-cover">
              <a
                href=""
                target="_blank"
                rel="noreferrer noopener"
                className="butn"
              >
                See On Github
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer noopener"
                className="butn2"
              >
                See Live
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* project ends */}
    </div>
  );
};

export default Work;
