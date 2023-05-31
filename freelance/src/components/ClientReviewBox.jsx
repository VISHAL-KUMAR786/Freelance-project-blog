import React from "react";

const ClientReviewBox = (props) => {
  let { imageUrl, name, email, comment, start } = props;
  let reviewArr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="box">
        <div className="box-top">
          <div className="profile">
            <div className="profile-img">
              <img src={imageUrl} alt="" />
            </div>
            <div className="name-user">
              <strong>{name}</strong>
              <span>{email}</span>
            </div>
          </div>
          <div className="reviews">
            {reviewArr.map((item, idx) => {
              if (item <= start)
                return (
                  <img key={idx} src="/images/client/star-solid.svg" alt="" />
                );
              else
                return (
                  <img key={idx} src="/images/client/star-regular.svg" alt="" />
                );
            })}
          </div>
        </div>
        <div className="comment">
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

export default ClientReviewBox;
