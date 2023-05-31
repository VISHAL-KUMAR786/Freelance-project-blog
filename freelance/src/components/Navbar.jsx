import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navbarListData, socialMediaIconData } from "../assets/data";

//* Image
import logoImage from "/images/icons8-menu.svg";
import closeImage from "/images/icons8-multiply-40.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClose, setIsMenuClose] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        setIsMenuClose(true);
      } else {
        setIsMenuClose(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sticky = 0;

  return (
    <>
      {/* social media icon */}
      <div className="social__media_icon">
        {socialMediaIconData.map((item, idx) => {
          return (
            <div key={idx}>
              <Link to={item.url}>
                <img src={item.src} alt="" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Header Section  */}
      <header>
        <div className="header__wrapper">
          <div className="logo__container">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="content__container">
            <div className="location__container">
              <div className="location__logo">
                <img src="/images/icons8-location-40.png" alt="" />
              </div>
              <div className="location__content">
                <small>13, Big Smart Str, 2nd Cross</small>
                <p>Newyork, USA 1002.</p>
              </div>
            </div>
            <div className="mail__container">
              <div className="mail__logo">
                <img src="/images/icons8-gmail-login-40.png" alt="" />
              </div>
              <div className="mail__content">
                <small>1-800-784-533 &amp; 544</small>
                <p>Machinery@Support.Com</p>
              </div>
            </div>
            <div className="social__container">
              {socialMediaIconData.map((item, idx) => {
                return (
                  <div key={idx}>
                    <Link to={item.url}>
                      <img src={item.src} alt="" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* shader */}
      <div className="shader" />

      {/* responsive */}
      <nav id="navbar" className={isMenuClose ? "sticky" : ""}>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <span>
            <img src={isMenuOpen ? closeImage : logoImage} alt="" />
          </span>
        </div>
        <Link className="logo" to="/">
          <div className="logo">
            CraneCare <span>.</span>
          </div>
        </Link>
        <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
          {navbarListData.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to={item.url} onClick={() => setIsMenuOpen(false)}>{item.value}</Link>
              </li>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
