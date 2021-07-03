import React from "react";
import { Link } from "react-router-dom";
import "./timeline.css";

import batmanYearOne from "../images/postImages/batman-yearOne.jpg";
import batmanManWhoLaughs from "../images/postImages/batman-theManWhoLaughs.jpg";
import batmanZeroYear from "../images/postImages/batman-zeroYear.jpg";
import Cover from "./Cover";

function Timeline(props) {
  return (
    <div className="parent">
      <div className="covercolumn">
        <Cover
          coverImage={batmanYearOne}
          id="1"
          alternatve="Batman | Year One Cover"
        />

        <Cover
          coverImage={batmanZeroYear}
          id="2"
          alternatve="Batman | Zero Year Cover"
        />

        <Cover
          coverImage={batmanManWhoLaughs}
          id="3"
          alternatve="Batman | The Man Who Laughs Cover"
        />

        <Link to="/timeline/4">
          <div className="coverContainer">
            <img
              src={`${batmanManWhoLaughs}`}
              className="coverImage"
              alt="Batman | The Man Who Laughs Cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Timeline;
