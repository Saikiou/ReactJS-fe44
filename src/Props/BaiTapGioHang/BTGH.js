import React, { Component } from "react";
import ModalGH from "./ModalGH";
import DSSP from "./DSSP";

export default class BTGH extends Component {
  //Xác định state giỏ hàng tại component BTGH vì có chứa nút xử lý thêm giỏ hàng và giao diện giỏ hàng
  state = {
    gioHang: [
      {
        // maSP: 1,
        // tenSP: "VinSmart Live",
        // hinhAnh: "./img/vsphone.jpg",
        // gia: 1000,
        // soLuong: 1,
      },
    ],
  };
  themGioHang = (sanPhamClick) => {
    console.log(sanPhamClick);
    //Định nghĩa hàm thay đổi state tại nơi chứa state
    //Set state

    let spGioHang = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      hinhAnh: sanPhamClick.hinhAnh,
      gia: sanPhamClick.giaBan,
      soLuong: 1,
    };
    //Định nghĩa hàm thay đổi state tại nơi chứa state
    //Tạo giỏ hàng mới
    let gioHangCN = [...this.state.gioHang];
    //Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
    let index = gioHangCN.findIndex((spGH) => spGH.maSP === spGioHang.maSP);
    if (index != -1) {
      gioHangCN[index].soLuong += 1;
    } else {
      gioHangCN.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCN,
    });
  };
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  render() {
    return (
      <div>
        <DSSP mangSP={this.arrProduct} themGioHang={this.themGioHang} />
        <ModalGH gioHang={this.state.gioHang} />
      </div>
    );
  }
}
