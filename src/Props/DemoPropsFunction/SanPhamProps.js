import React, { Component } from "react";

export default class SanPhamProps extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card" style={{ width: 300 }}>
          <img
            height="300"
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt="123"
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button
              onClick={() => {
                this.props.xemCT(sanPham);
              }}
              className="btn btn-success"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
