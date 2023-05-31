import React, { useEffect } from "react";
import { WelcomeBanner } from "../components";
import { WelcomeBannerData } from "../assets/data";

//* Styling
import "../assets/styles/about.css";

const About = () => {
  const { _heading, _content, _style, _url, _hash } = WelcomeBannerData.about;
  
  useEffect(() => {
    document.title = "About";
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
    </>
  );
};

export default About;
