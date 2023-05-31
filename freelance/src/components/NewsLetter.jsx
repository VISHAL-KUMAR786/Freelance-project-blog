import React from "react";

const NewsLetter = () => {
  return (
    <>
      {/* news & letter section  */}
      <div className="new_letter_section">
        <div className="new_letter__wrapper">
          <div className="center-text">
            <h1>New &amp; Letter</h1>
          </div>
          <div
            className="carousel"
            data-flickity='{"autoPlay": true, "groupCells": true,"autoPlay": true, "lazyLoad": true ,"autoPlay": 4500,
				"pauseAutoPlayOnHover": false, "wrapAround": true }'
          >
            <a href="">
              <div className="carousel-cell">
                <div
                  className="new_card"
                  style={{
                    backgroundImage: "url(/images/news_letter/project-1.jpg)",
                  }}
                >
                  <div className="content">
                    <h1>Rail Engine Manufacture</h1>
                    <p>construction</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="carousel-cell">
                <div
                  className="new_card"
                  style={{
                    backgroundImage: "url(/images/news_letter/project-2.jpg)",
                  }}
                >
                  <div className="content">
                    <h1>Generate Natural Power</h1>
                    <p>Power &amp; Energy</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="carousel-cell">
                <div
                  className="new_card"
                  style={{
                    backgroundImage: "url(/images/news_letter/project-3.jpg)",
                  }}
                >
                  <div className="content">
                    <h1>Rail Engine Manufacture</h1>
                    <p>Engineering</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="carousel-cell">
                <div
                  className="new_card"
                  style={{
                    backgroundImage: "url(/images/news_letter/project-1.jpg)",
                  }}
                >
                  <div className="content">
                    <h1>Rail Engine Manufacture</h1>
                    <p>construction</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="carousel-cell">
                <div
                  className="new_card"
                  style={{
                    backgroundImage: "url(/images/news_letter/project-2.jpg)",
                  }}
                >
                  <div className="content">
                    <h1>Generate Natural Power</h1>
                    <p>Power &amp; Energy</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="carousel-cell">
                <div
                  className="new_card"
                  style={{
                    backgroundImage: "url(/images/news_letter/project-3.jpg)",
                  }}
                >
                  <div className="content">
                    <h1>Rail Engine Manufacture</h1>
                    <p>Engineering</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
