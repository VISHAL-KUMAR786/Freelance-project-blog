import React, { useEffect } from "react";
import { WelcomeBanner, ServiceCard } from "../components";
import { WelcomeBannerData, serviceCardData } from "../assets/data";

//* Styling
import "../assets/styles/service.css";

const Services = () => {
  const { _heading, _content, _hash, _style, _url } = WelcomeBannerData.service;

  useEffect(() => {
    document.title = "Services";
  }, []);

  return (
    <>
      <WelcomeBanner
        heading={_heading}
        content={_content}
        hash={_hash}
        url={_url}
        styling={_style}
      />

      {/* service container */}
      <div className="container">
        <div className="row">
          {serviceCardData.map((item, idx) => {
            return (
              <div className="col-md-4" key={idx}>
                <ServiceCard
                  key={idx}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  content={item.content}
                  readMoreUrl={item.readMoreUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
