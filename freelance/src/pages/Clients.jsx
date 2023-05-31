import React, { useEffect } from "react";
import { customerData, clientReviewData } from "../assets/data";
import { WelcomeBanner, ClientReviewBox } from "../components";

import { WelcomeBannerData } from "../assets/data";

//* Styling
import "../assets/styles/client.css";

const Clients = () => {
  const { _heading, _content, _style, _url, _hash } = WelcomeBannerData.client;

  useEffect(() => {
    document.title = 'Clients'
  }, [])
  

  return (
    <>
      <WelcomeBanner
        heading={_heading}
        content={_content}
        hash={_hash}
        url={_url}
        styling={_style}
      />

      {/* feedback */}
      <section id="box" style={{ padding: "3rem 0 5rem 0" }}>
        <div className="heading">
          <span>Feedback</span>
          <h1
            style={{
              padding: "0px 10px",
            }}
          >
            clients says
          </h1>
        </div>
        <div className="container">
          {/* box */}
          {clientReviewData.map((item, idx) => {
            return (
              <ClientReviewBox
                key={idx}
                imageUrl={item.imageUrl}
                name={item.name}
                email={item.email}
                comment={item.comment}
                start={item.start}
              />
            );
          })}
        </div>
      </section>

      {/* client testimonial */}
      <div className="client_testimonial">
        <div className="client_testimonial__wrapper">
          <div className="text-center">
            <div className="heading">
              <h1
                style={{
                  padding: "0px 10px",
                  marginBottom: "2rem",
                }}
              >
                Regular Client
              </h1>
            </div>
          </div>
          <div className="client_grid_box">
            {customerData.map((item, idx) => {
              return (
                <div className="carousel-cell" key={idx}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
