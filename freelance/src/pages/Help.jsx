import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

//* Styling
import "../assets/styles/help.css";

const Help = () => {
  const [helpImageData, setHelpImageData] = useState([
    {
      url: "https://i.ibb.co/bWfN3Qy/undraw-onboarding-o8mv-1.png",
      width: 500,
      height: 400,
      hash: "LGSiN$D*%}?Hx]o1kCbb?]%MR6IU",
      isLoading: true,
    },
  ]);

  useEffect(() => {
    const updatedHelpImageData = helpImageData.map((obj) => {
      const image = new Image();

      image.onload = () => {
        setHelpImageData((prevState) =>
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

    setHelpImageData(updatedHelpImageData);

    document.title = "Help";
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              Let's get you
              <br /> some help!
            </h1>
            <h6>
              Have any issue? Send us an &nbsp;
              <span className="email-us">email.</span>
            </h6>
            <div className="img-wrapper">
              <div
                style={{
                  display: helpImageData[0].isLoading ? "none" : "inline",
                }}
              >
                <Blurhash
                  hash={helpImageData[0].hash}
                  width={helpImageData[0].width}
                  height={helpImageData[0].height}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              </div>
              <div
                style={{
                  display: !helpImageData[0].isLoading ? "none" : "inline",
                }}
              >
                <img
                  src={helpImageData[0].url}
                  width={helpImageData[0].width}
                  height={helpImageData[0].height}
                  alt="image"
                />
              </div>
            </div>
          </div>
          {/* Rest of the code */}

          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="list">What list are you looking for ?</label>
                <input
                  type="text"
                  className="form-control w_input_100"
                  id="list"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tags">Please Few Primary Tags ?</label>
                <input type="text" className="form-control w_input_100" id="tags" />
              </div>
              <div className="form-group">
                <label htmlFor="describe">
                  Please desribe your list needs ?
                </label>
                <textarea
                  className="form-control"
                  id="describe"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  Select Category
                </label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>How do I get started?</option>
                  <option>How do I create a new account?</option>
                  <option>How do I reset my password?</option>
                  <option>How do I contact customer support?</option>
                  <option>
                    How do I navigate through the website/application?
                  </option>
                </select>
              </div>
              <div className="button-container">
                <button type="button" className="btn btn-primary">
                  <span>Submit</span>
                  <i className="fas fa-long-arrow-alt-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
