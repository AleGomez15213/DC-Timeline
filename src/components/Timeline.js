import React, { useEffect } from "react";
import axios from "axios";
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
          id="0"
          alternatve="Batman | Year One Cover"
        />

        <Cover
          coverImage={batmanZeroYear}
          id="1"
          alternatve="Batman | Zero Year Cover"
        />

        <Cover
          coverImage={batmanManWhoLaughs}
          id="2"
          alternatve="Batman | The Man Who Laughs Cover"
        />
      </div>
    </div>
  );
}

export default Timeline;
