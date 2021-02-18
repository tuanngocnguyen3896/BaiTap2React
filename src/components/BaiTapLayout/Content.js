import React, { Component } from "react";

export default class Content extends Component {
  state = {
    glassesDetail: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  // Render hình ảnh kính lên giao diện
  renderGlassesImage = () => {
    return this.arrProduct.map(
      (glasses, index) => {
        return (
          <div key={index} className="col-2 my-4">
            <button
              onClick={() => this.changeGlass(glasses)}
              style={{ background: "none", outline: "none" }}
            >
              <img
                style={{ cursor: "pointer" }}
                width="100"
                height="50"
                src={glasses.url}
              />
            </button>
          </div>
        );
      }
    );
  };
  // Đổi hình ảnh kính và info khi click
  changeGlass = (gl) => {
    this.setState({
      glassesDetail: gl,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-6 m-auto"
            style={{
              backgroundImage: `url("./glassesImage/model.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 400,
              width: "35%",
            }}
          >
            <div>
              <img
                style={{
                  position: "absolute",
                  left: "21%",
                  top: "35%",
                  opacity: 0.7,
                }}
                width={220}
                height={60}
                src={this.state.glassesDetail.url}
              ></img>
            </div>
            <div>
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
                <div className="card-body">
                  <p style={{ color: "blue" }} className="card-text">
                    {this.state.glassesDetail.name}
                  </p>
                  <p className="card-text text-white">
                    {this.state.glassesDetail.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 m-auto"
            style={{
              backgroundImage: `url("./glassesImage/model.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 400,
              width: "35%",
            }}
          ></div>
        </div>
        <div className="row bg-white mt-3 ">{this.renderGlassesImage()}</div>
      </div>
    );
  }
}
