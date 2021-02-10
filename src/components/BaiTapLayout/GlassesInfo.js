import React, { Component } from "react";

export default class GlassesInfo extends Component {
  render() {
    let { glasses } = this.props;
    return (
      <div
        className="card"
        style={{
          backgroundColor: "orange",
          position: "absolute",
          bottom: "17%",
          left: "14%",
          width: 400,
          opacity: 0.5,
        }}
      >
        <p style={{ color: "blue" }} className="card-text">
          {glasses?.name}
        </p>
        <div className="card-body">
          <p className="card-text text-white">{glasses?.desc}</p>
        </div>
      </div>
    );
  }
}
