import React from "react";
import "./SearchResult.scss";
import userImg1 from "../img/profic-pic.jpg";
import emailIcon from "../img/email-icon.svg";
import locationIcon from "../img/location-icon.svg";

// import userImg1 from '../img/profic-pic.png';

const searchResult = () => (
  <div className="SearchResult">
    <div className="users">
      <div className="user card">
        <img src={userImg1} alt="User" />

        <div className="userdetail">
          <div className="user__Name">
            <span>Joseph Byers</span>
            <span>NO</span>
          </div>
          <div className="user__contact">
            <span>
              <img src={locationIcon} alt="Phone Number" />
            </span>
            <span>23489420733</span>
          </div>

          <div className="user__email">
            <span>
              <img src={emailIcon} alt="Email" />
            </span>
            <span>justnotok@gmail.com</span>
          </div>
          <i class="far fa-star user__star" />
        </div>
      </div>

      <div className="user card">
        <img src={userImg1} alt="User" />

        <div className="userdetail">
          <div className="user__Name">
            <span>Joseph Byers</span>
            <span>NO</span>
          </div>
          <div className="user__contact">
            <span>
              <img src={locationIcon} alt="Phone Number" />
            </span>
            <span>23489420733</span>
          </div>

          <div className="user__email">
            <span>
              <img src={emailIcon} alt="Email" />
            </span>
            <span>justnotok@gmail.com</span>
          </div>
          <i class="far fa-star user__star" />
        </div>
      </div>

      <div className="user card">
        <img src={userImg1} alt="User" />

        <div className="userdetail">
          <div className="user__Name">
            <span>Joseph Byers</span>
            <span>NO</span>
          </div>
          <div className="user__contact">
            <span>
              <img src={locationIcon} alt="Phone Number" />
            </span>
            <span>23489420733</span>
          </div>

          <div className="user__email">
            <span>
              <img src={emailIcon} alt="Email" />
            </span>
            <span>justnotok@gmail.com</span>
          </div>
          <i class="far fa-star user__star" />
        </div>
      </div>
    </div>
  </div>
);

export default searchResult;
