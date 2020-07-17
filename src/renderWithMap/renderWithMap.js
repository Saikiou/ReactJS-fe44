import React, { Component } from "react";

export default class renderWithMap extends Component {
  danhSachSanPham = [
    {
      maSP: 1,
      tenSP: "Iphone X",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    },
    {
      maSP: 2,
      tenSP: "Iphone Xs",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    },
    {
      maSP: 3,
      tenSP: "Iphone Xs Max",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    },
  ];
  renderTable = () => {
    //render mangObject => jsx (mảng các thẻ tr) => [<tr>...<tr/>,<tr>...<tr/>]
    let arrSPJXS = [];
    arrSPJXS = this.danhSachSanPham.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
          <td>
            <img
              src={sanPham.hinhAnh}
              alt={sanPham.hinhAnh}
              width={100}
              height={100}
            />
          </td>
          <td>
            <button className="btn btn-danger">Xoá</button>
          </td>
        </tr>
      );
    });
    // for (let index = 0; index < this.danhSachSanPham.length; index++) {
    //   let sanPham = this.danhSachSanPham[index];
    //   //Từ sản phẩm tạo ra 1 object jsx (thẻ <tr><tr/>)
    //   let trJSX = (
    //     <tr key={index}>
    //       <td>{sanPham.maSP}</td>
    //       <td>{sanPham.tenSP}</td>
    //       <td>{sanPham.gia}</td>
    //       <td>
    //         <img
    //           src={sanPham.hinhAnh}
    //           alt={sanPham.hinhAnh}
    //           width={100}
    //           height={100}
    //         />
    //       </td>
    //       <td>
    //         <button className="btn btn-danger">Xoá</button>
    //       </td>
    //     </tr>
    //   );
    //   arrSPJXS.push(trJSX);
    // }
    return arrSPJXS;
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-primaty">Danh mục sản phẩm</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Giá</th>
              <th>Hình ảnh</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
