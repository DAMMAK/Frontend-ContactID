import React from "react";
import "./Modal.scss";
import pic from "../img/profic-pic.jpg";
import phoneIcon from "../img/location-icon.svg";
import locationIcon from "../img/address-icon.svg";
import emailIcon from "../img/email-icon.svg";
const modal = () => (
  <section className="Modal">
    <div className="Modal__content">
      <div className="info">
        <img src={pic} />
        <div className="">Jospeh Byers</div>
        <div>Male, 27</div>
        <div>NO</div>
      </div>
      <div className="contact_details">
        <div className="Phone">
          <span>
            <img src={phoneIcon} alt="Phone Icon" />
          </span>
          <span>2348189420733</span>
        </div>

        <div className="Email">
          <span>
            <img src={emailIcon} Alt="email Icon" />
          </span>
          <span>adekoyafelx@gmail.com</span>
        </div>

        <div className="Location">
          <span>
            <img src={locationIcon} Alt="location" />
          </span>
          <span>Ijan Terrasse 346</span>
        </div>
      </div>
      <div className="cta"> 
        <div className="favourite">Add to favourite</div>

        <div className="signinBtn">Sign In</div>

        <div className="info">to get more information</div>
      </div>
     
    </div>
    <div className="closeButton">X</div>
  </section>
);

export default modal;
