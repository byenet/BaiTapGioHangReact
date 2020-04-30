import React, { Component } from 'react'
import * as action from '../redux/action/index'

// Ket noi voi reducerGioHang
import {connect} from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        const {sanPham} = this.props;

        return (
          <div className="card" style={{ width: "18rem", height: "28rem"}}>
            <img src={sanPham.hinhAnh} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">{sanPham.tenSP}</h5>
              <p className="card-text">
                {sanPham.giaBan.toLocaleString()} VNĐ
              </p>
              <button className ="btn btn-success" onClick={()=>{this.props.themGioHang(sanPham)}}>
                  Mua sản phẩm
              </button>
            </div>
          </div>
        );
    }
}

// xay dung ham tao ra prop la ham xu ly su kien => dua du lieu len store
const mapDispatchToProps = (dispatch) =>{
    return{
        //Tao ra props component (la function => dua du lieu len store)

        // themGioHang: (sanPham) =>{
        //     const spGioHang = {
        //         maSP: sanPham.maSP,
        //         tenSP: sanPham.tenSP,
        //         giaBan: sanPham.giaBan,
        //         soLuong: 1,
        //         hinhAnh: sanPham.hinhAnh,
        //     }

        //     // Tao action dua du lieu len reducer
        //     const action = {
        //         type: 'THEM_GIO_HANG', // bat buoc dat ten type
        //         // spGioHang: spGioHang viet boc tach nhu ben duoi cho nhanh
        //         spGioHang // Noi dung gui len reducer
        //     }

        //     console.log(action);
            
        //     //Dung ham dispatch dua du lieu action len reducer
        //     dispatch(action);
        // }

        themGioHang: sanPham =>{
          dispatch(action.themGioHang(sanPham));
        }

    }
}


export default connect(null,mapDispatchToProps)(SanPhamRedux);
