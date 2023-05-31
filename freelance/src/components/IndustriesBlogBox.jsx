import React from "react";
import { Link } from "react-router-dom";

const IndustriesBlogBox = (props) => {
  let {
    url,
    imageUrl,
    field,
    publish_date,
    title,
    content,
    publisher_name,
    numberOfComment,
  } = props;
  return (
    <>
      <Link to={url}>
        <div className="card">
          <img src={imageUrl} alt="" />
          <div className="content"> 
            <div className="field">
              <div className="box1">
                <p>📁 {field.substring(0,11)}.</p>
              </div>
              <div className="box2">
                <p>⏰ {publish_date}</p>
              </div>
            </div>
            <div className="heading">
              <h2>{title.substring(0, 45)}...</h2>
            </div>
            <p>{content.substring(0, 150)}...</p>
            <div className="lower_box">
              <div className="box1">
                <div className="character">
                  <p>{publisher_name.substring(0,11)}.</p>
                </div>
                <div className="comment">
                  <p>💬 {numberOfComment} COMMENTS</p>
                </div>
              </div>
              <div className="box2">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default IndustriesBlogBox;
