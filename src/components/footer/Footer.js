import React from "react";
import "./Footer.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div style={{ width: "90%" }} className="m-auto">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100px",
          borderTop: "2px solid #fd841f",
          borderBottom: "2px solid #fd841f",
        }}
      >
        <p style={{ color: "#fd841f", textAlign: "center", marginBottom: 0 }}>
          Got a question or just need support?{" "}
          <button className="getInTouchBtn">Get in touch</button>
        </p>
      </div>
      <div className="footerSecondSection">
        <div>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>COMPANY</p>
          <p>
            <a href="#a">FAQ</a>
          </p>
          <p>
            <a href="#a">Jobs</a>
          </p>
          <p>
            <a href="#a">Blog</a>
          </p>
          <p>
            <a href="#a">Press</a>
          </p>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>OFFERINGS</p>
          <p>
            <a href="#a">Top Products</a>
          </p>
          <p>
            <a href="#a">Deals</a>
          </p>
          <p>
            <a href="#a">Invite friends</a>
          </p>
          <p>
            <a href="#a">Student discount</a>
          </p>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>INFO</p>
          <p>
            <a href="#a">How it works</a>
          </p>
          <p>
            <a href="#a">Great Condition Promise</a>
          </p>
          <p>
            <a href="#a">Gaming Hub Care</a>
          </p>
        </div>
        <div>
          <input className="" disabled value="ENGLISH" />
          <select name="" id="">
            <option value="Bangladesh">
              <LocationOnOutlinedIcon />
              Bangladesh
            </option>
          </select>
        </div>
      </div>

      <div className="footerThirdSection">
        <div className="">Gaming Hub. © 2022</div>
        <div className=" d-flex justify-content-center">
        <FontAwesomeIcon className="me-4" icon={faFacebook} />
        <FontAwesomeIcon className="me-4" icon={faTwitter} />
        <FontAwesomeIcon className="me-4" icon={faYoutube} />
        <FontAwesomeIcon className="me-4" icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className="d-flex justify-content-evenly">
            <a href="#a">Privacy Policy</a>
            <a href="#a">Terms and Conditions</a>
            <a href="#a">Imprint</a>
        </div>
      </div>
    </div>
  );
}
