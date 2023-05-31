import React, { useEffect } from "react";
import { WelcomeBanner, IndustriesBlogBox } from "../components";
import { WelcomeBannerData, IndustriesBlogBoxData } from "../assets/data";

//* Styling
import "../assets/styles/industries.css";

const Industries = () => {
  const { _heading, _content, _style, _url, _hash } =
    WelcomeBannerData.industries;

  useEffect(() => {
    document.title = 'Industries'
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

      {/* 
      Search Box 
      <div className="content2">
        <div className="box">
          <h2>Search Box</h2>
          <input type="text" />
        </div>
      </div> 
      */}

      {/* blog container */}
      <div className="blog_container">
        <div className="blog_container__wrapper container">
          <div className="content1">
            <div className="text-center">
              <h2>Blog</h2>
            </div>
            {IndustriesBlogBoxData.map((item, idx) => {
              return (
                <IndustriesBlogBox
                  key={idx}
                  url={item.url}
                  imageUrl={item.imageUrl}
                  field={item.field}
                  publish_date={item.publish_date}
                  title={item.title}
                  content={item.content}
                  publisher_name={item.publisher_name}
                  numberOfComment={item.numberOfComment}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
