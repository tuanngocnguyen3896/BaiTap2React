import React, { Component } from "react";
import Model from "./Model";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("./glassesImage/background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 800,
        }}
      >
        <h2
          className="text-white py-2 display-5"
          style={{ backgroundColor: "black", opacity: 0.5 }}
        >
          Try Glassese Online
        </h2>
        <Model/>
      </div>
    );
  }
}
