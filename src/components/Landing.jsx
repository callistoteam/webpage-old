import React from "react";
import styles from "../styles";

const Landing = () => {
  return (
    <div className="ui stackable grid" {...styles.Landing}>
      <div className="ten wide column">
        <h1 className="ui header" style={{ fontSize: "100px" }}>
          Team, <br />
          Callisto.
        </h1>
      </div>
      <div className="six wide column">
        <br />
        <h1 className="ui header" style={{ fontSize: "50px" }}>
          We Make Discord Bot.
        </h1>
      </div>
    </div>
  );
};

export default Landing;
