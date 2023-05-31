import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  let { imageUrl, title, content, readMoreUrl } = props;
  return (
    <>
      <div className="card" style={{ margin: "1rem"}}>
        <img src={imageUrl} className="card-img-top" alt="image" />
        <div className="card-body">
          <h5 className="card-title">{title.substring(0,30)}..</h5>
          <p className="card-text">{content.substring(0,250)}...</p>
          <Link
            to={readMoreUrl}
            className="btn btn-primary"
            style={{ textDecoration: "none" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
