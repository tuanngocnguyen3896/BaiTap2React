import React, { Component } from "react";
import Content from "./Content";
import Header from './Header'
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
        <Header/>
        <Content/>
      </div>
    );
  }
}
