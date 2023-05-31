import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";

const WelcomeBanner = (props) => {
  let { heading, content, url, hash } = props;
  const [welcomeImageData, setWelcomeImageData] = useState([
    {
      url,
      width: window.innerWidth,
      height: 500,
      hash,
      isLoading: true,
    },
  ]);

  useEffect(() => {
    const updatedWelcomeImageData = welcomeImageData.map((obj) => {
      const image = new Image();

      image.onload = () => {
        setWelcomeImageData((prevState) =>
          prevState.map((item) => {
            if (item.url === obj.url) {
              return { ...item, isLoading: true };
            }
            return item;
          })
        );
      };

      image.src = obj.url;
      return { ...obj, isLoading: false };
    });

    setWelcomeImageData(updatedWelcomeImageData);
  }, []);

  return (
    <>
      {/* welcome banner */}
      <div className="welcome-banner" style={{ position: "relative" }}>
        {/* <LazyLoadImage
          height={500}
          src={url}
          effect="blur"
          width={window.innerWidth}
          style={{ objectFit: "cover" }}
        /> */}

        <div
          style={{
            display: welcomeImageData[0].isLoading ? "none" : "inline",
          }}
          className="box"
        >
          <Blurhash
            hash={welcomeImageData[0].hash}
            width={welcomeImageData[0].width}
            height={welcomeImageData[0].height}
            resolutionX={32}
            resolutionY={64}
            punch={1}
          />
        </div>
        <div
          style={{
            display: !welcomeImageData[0].isLoading ? "none" : "inline",
          }}
        >
          <img
            src={welcomeImageData[0].url}
            width={welcomeImageData[0].width}
            height={welcomeImageData[0].height}
            alt="image"
          />
        </div>

        <div
          className="welcome-wrapper"
          style={{ position: "absolute", top: "0", left: "0" }}
        >
          <div className="welcome-content">
            <h2>{heading}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBanner;
