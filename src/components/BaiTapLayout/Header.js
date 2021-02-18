import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2
          className="text-white py-2 display-5"
          style={{ backgroundColor: "black", opacity: 0.5 }}
        >
          Try Glassese Online
        </h2>
      </div>
    );
  }
}
