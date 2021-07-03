import React from "react";
import { Link } from "react-router-dom";
import postList from "../posts.json";

function Cover(props) {
  return (
    <div>
      <Link to={`${props.id}`}>
        <div className="coverContainer">
          <img
            src={props.coverImage}
            className="coverImage"
            alt={props.alternative}
          />
        </div>
      </Link>
    </div>
  );
}

export default Cover;
