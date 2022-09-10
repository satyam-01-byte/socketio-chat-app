import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div>
    {users ? (
      <div className="textContainer">
        <h3>Online:</h3>
        <div className="activeContainer">
          <div>
            {users.map(({ name }) => (
              <p key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </p>
            ))}
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
