import React, { Component } from "react";

export default class Child extends Component {
  //this.props: là thuộc tính có sẳn của component nhận giá trị từ component chà truyền vào
  render() {
    let { name, price, image } = this.props.productProps;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
