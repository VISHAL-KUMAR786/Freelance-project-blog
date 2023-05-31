import React from "react";
import { Link } from "react-router-dom";
import { navbarListData, socialMediaIconData } from "../assets/data";

const Footer = () => {
  return (
    <>
      {/* footer section  */}
      <footer>
        <div className="footer-wrapper">
          <div className="footer1">
            <div className="wide-box">
              <div className="logo">
                <Link to="/">
                  CraneCare<span style={{ color: "#ff3d00" }}>.</span>
                </Link>
              </div>
              <Link to="/help">
                <p>© {new Date().getFullYear()} Care.</p>
                <p>All Rights Reserved</p>
              </Link>
            </div>
            <div className="equal-box">
              <h2>Company</h2>

              {navbarListData.map((item, idx) => {
                return (
                  <li key={idx}>
                    <Link to={item.url}>{item.value}</Link>
                  </li>
                );
              })}
            </div>
            <div className="equal-box">
              <h2>Contact</h2>
              <Link to="/contact">4967 Sardis Sta,</Link>
              <Link to="/contact">Victoria 8007, Montreal.</Link>
              <Link to="/contact">support@artstudio.com</Link>
            </div>
            <div className="equal-box">
              <h2>More</h2>
              <Link to="/">destination</Link>
              <Link to="/">venue</Link>
              <Link to="/">trip</Link>
            </div>
            <div className="wide-box">
              <div className="social-media-icon">
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
              <p>we are present on these platform.</p>
            </div>
          </div>
          <div className="footer2" style={{ marginBottom: "1rem" }}>
            Copyright © {new Date().getFullYear()} vishal kumar . All Right Reserved .
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
