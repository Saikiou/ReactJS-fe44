import React, { Component } from "react";

export default class BT2productItem extends Component {
  render() {
    let { productItem } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={productItem.image} alt />
        <div className="card-body">
          <h4 className="card-title">{productItem.name}</h4>
          <p className="card-text">{productItem.price}</p>
          <button className="btn btn-success btn-dark">add to carts</button>
        </div>
      </div>
    );
  }
}
