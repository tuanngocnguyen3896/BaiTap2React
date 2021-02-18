import React, { Component } from "react";

export default class GlassesInfo extends Component {
  render() {
    let { glasses, xemCT } = this.props;
    return (
      <div className="text-center m-auto"
        style={{ cursor: "pointer" }}
        onClick={() => {
          xemCT(glasses);
        }}
      >
        <img className="my-2" alt={glasses?.url} width={150} height={60} src={glasses?.url} />

        <div className="card-body w-100" >
          <h4 className="card-title">{glasses?.id}</h4>
          {/* <p className="card-text">{glasses?.name}</p> */}
          {/* <p className="card-text">{glasses?.desc}</p> */}
        </div>
      </div>
    );
  }
}
