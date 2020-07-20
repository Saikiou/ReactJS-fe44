import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.TenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
              className="btn btn-success"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
