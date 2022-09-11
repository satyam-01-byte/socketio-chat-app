import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

let randomRoom = "axw-gtc-ertf";

const Join = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [room, setRoom] = useState("");

  const nextBtnHandler = () => {
    localStorage.setItem("name", name);
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("roomInput").style.display = "block";
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Chat57</h1>

        <div id="nameInput">
          <input
            type="text"
            placeholder="Enter name"
            className="joinInput"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            className="button mt-20"
            disabled={!name}
            onClick={() => nextBtnHandler()}
          >
            Next <i className="fa fa-arrow-right"></i>
          </button>
        </div>

        <div id="roomInput">
          <Link to={`/chat?name=${name}&room=${randomRoom}`}>
            <button className="button mt-20" disabled={!name || !randomRoom}>
              Create new room
            </button>
          </Link>
          <p>------------------ OR ------------------</p>

          <div id="joinRoom">
            <input
              type="text"
              placeholder="Enter room ID"
              className="joinInput mt-20"
              required
              onChange={(e) => setRoom(e.target.value)}
            />

            <Link to={`/chat?name=${name}&room=${room}`}>
              <button className="button mt-20" disabled={!name || !room}>
                Join
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
