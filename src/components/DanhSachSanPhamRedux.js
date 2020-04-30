import React, { Component } from 'react'
import data from '../data/phoneData.json'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {

    // Viet phuong thuc render sanPham render
    renderSanPham = () => {
        return data.map((sanPham,index) => {
            return (<div className="col-4" key={index}>
                <SanPhamRedux sanPham = {sanPham}/>
            </div>)
        })
    }
    render() {
        return (
          <div className="container">
            <hr/>
            <h3 className="text-center text-success my-5">
              Danh Sách Sản Phẩm
            </h3>
            <div className="row mb-5">{this.renderSanPham()}</div>
          </div>
        );
    }
}
