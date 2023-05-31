import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { WelcomeBanner } from "../components";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  logoDiscord,
  logoTwitter,
  logoLinkedin,
  logoInstagram,
  call,
  mail,
  location,
} from "ionicons/icons";
import { WelcomeBannerData } from "../assets/data";

//* Styling
import "../assets/styles/contact.css";

const Contact = () => {
  const { _heading, _content, _style, _url, _hash } = WelcomeBannerData.contact;
  const [contactImageData, setContactImageData] = useState([
    {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.1785324851544!2d77.67463111459459!3d28.982080174926114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6435f74fcf0f%3A0xbc4d11603e4ce309!2sRohta%20Rd%20Flyover%2C%20Meerut%20Cantt%2C%20Meerut%2C%20Uttar%20Pradesh%20250001!5e0!3m2!1sen!2sin!4v1647367605951!5m2!1sen!2sin",
      width: 600,
      height: 295,
      hash: "LGSiN$D*%}?Hx]o1kCbb?]%MR6IU",
      // hash: "L2Q]=@G^{U%3k}tK^Uvz30:,x{ML",
      isLoading: true,
    },
  ]);

  useEffect(() => {
    const updatedContactImageData = contactImageData.map((obj) => {
      const image = new Image();

      image.onload = () => {
        setContactImageData((prevState) =>
          prevState.map((item) => {
            if (item.url === obj.url) {
              return { ...item, isLoading: false };
            }
            return item;
          })
        );
      };

      image.src = obj.url;
      return obj;
    });

    setContactImageData(updatedContactImageData);

    document.title = "Contact";
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

      <div className="contactUs"
      style={{
        padding: '5rem 5rem'
      }}>
        <div className="title">
          <h4
            style={{
              padding: "0px 1rem",
              marginBottom: "2rem",
              background: "#262626",
              color: "#fff",
              letterSpacing: "2px",
            }}
          >
            Get in Touch
          </h4>
        </div>
        <div className="box1">
          {/* form box  */}
          <div className="contact form">
            <h2>Send a Message</h2>
            <form action="#">
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" name="" id="" required />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" name="" id="" required />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="email" name="" id="" required />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="text" name="" minLength={10} id="" required />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea
                      name=""
                      id=""
                      minLength={1}
                      maxLength={300}
                      required
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" defaultValue="send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* info box  */}
          <div className="contact info">
            <h2>Contact Info</h2>
            <div className="inforBox">
              <div>
                <span>
                  <IonIcon icon={location} aria-label="logo mail" />
                </span>
                <p>
                  Saraswati vihar, Rohta Road, Meerut cantt, Uttar Pradesh{" "}
                  <br /> INDIA{" "}
                </p>
              </div>
              <div>
                <span>
                  <IonIcon icon={mail} aria-label="logo mail" />
                </span>
                <Link to="mailto:vishal132@gmail.com">vishal132@gmail.com</Link>
              </div>
              <div>
                <span>
                  <IonIcon icon={call} aria-label="logo call" />
                </span>
                <Link to="tel:+917017094609">+91 987 654 3210</Link>
              </div>
              {/* all the social media links */}
              <ul className="sci">
                <li>
                  <Link to="/">
                    <IonIcon icon={logoInstagram} aria-label="logo instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <IonIcon icon={logoLinkedin} aria-label="logo linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <IonIcon icon={logoTwitter} aria-label="logo twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <IonIcon icon={logoDiscord} aria-label="logo discord" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* map box  */}

          <div className="contact map">
            <div
              style={{
                display: contactImageData[0].isLoading ? "none" : "inline",
              }}
            >
              <Blurhash
                hash={contactImageData[0].hash}
                width={contactImageData[0].width}
                height={contactImageData[0].height}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            </div>
            <div
              style={{
                display: !contactImageData[0].isLoading ? "none" : "inline",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.1785324851544!2d77.67463111459459!3d28.982080174926114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6435f74fcf0f%3A0xbc4d11603e4ce309!2sRohta%20Rd%20Flyover%2C%20Meerut%20Cantt%2C%20Meerut%2C%20Uttar%20Pradesh%20250001!5e0!3m2!1sen!2sin!4v1647367605951!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
