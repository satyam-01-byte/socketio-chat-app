import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <i class="fa-solid fa-share-nodes" id="shareLink"></i>
      <a href="/">
        <i class="fa-solid fa-circle-xmark"></i>
      </a>
    </div>
  </div>
);

export default InfoBar;
