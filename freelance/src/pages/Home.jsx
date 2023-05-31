import React, { useEffect } from "react";
import { SlideShow } from "../components";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <SlideShow />
    </>
  );
};

export default Home;
