import React, { Component } from 'react'
import * as action from '../redux/action';

// Ket noi redux can import thu vien connect (connect ham ket noi reactComponent va reduxStore)
import {connect} from 'react-redux';

class ModalGioHangRedux extends Component {
    // this.props.gioHang la thuoc tinh nhan tu redux
    renderGioHang = () =>{
        return this.props.gioHang.map((spGH,index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>
                  <img src={spGH.hinhAnh} width="60" height="50"></img>
                </td>
                <td>{spGH.giaBan.toLocaleString()} VNĐ</td>
                <td>
                  <button
                    className="mr-1"
                    onClick={() => this.props.tangGiamSoLuong(spGH.maSP, true)}
                  >
                    +
                  </button>
                  {spGH.soLuong}
                  <button
                    className="ml-1"
                    onClick={() => this.props.tangGiamSoLuong(spGH.maSP, false)}
                  >
                    -
                  </button>
                </td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()} VNĐ</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.xoaGioHangIndex(index)}
                  >
                    Xóa(index)
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.xoaGioHangMaSP(spGH.maSP)}
                  >
                    Xóa(Mã SP)
                  </button>
                </td>
              </tr>
            );
        })
    }

    render() {
        // this.props.gioHang la thuoc tinh nhan tu redux
        console.log(this.props.gioHang);
        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <td colSpan = '5'></td>
                        <td>Tổng tiền</td>
                        <td>{this.props.gioHang.reduce((tongTien, spGioHang, index) =>{
                            return tongTien+= spGioHang.soLuong * spGioHang.giaBan
                        },0).toLocaleString()} VNĐ</td>
                    </tfoot>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{ // state: la store tong, => truy xuat den GiohangReducer => bien state tren GioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang //=> tao ra 1 props cua component
    }
}

  const mapDispatchToProps = (dispatch) =>{
    return {
      //       xoaGioHangIndex: index => {
      //         const action = {
      //           type: "XOA_GIO_HANG",
      //           // index: index
      //           index
      //         };
      //         // console.log(action);

      //         // Dua action len reducer
      //         dispatch(action);
      //       },

      xoaGioHangIndex: index =>{
        dispatch(action.xoaGioHangIndex(index));
      },



      // xoaGioHangMaSP: maSP => {
      //   const action = {
      //     type: "XOA_GIO_HANG_MSP",
      //     // maSP: maSP
      //     maSP
      //   };
      //   dispatch(action);
      // },

      xoaGioHangMaSP: maSP => {
        dispatch(action.xoaGioHangMaSP(maSP));
      },


      // tangGiamSoLuong: (maSP, tangGiam) => {
      //     const action = {
      //         type: 'TANG_GIAM_SL',
      //         maSP,
      //         tangGiam
      //     }
      //     dispatch (action)
      // }

      tangGiamSoLuong: (maSP, tangGiam) => {
        dispatch(action.tangGiamSL(maSP, tangGiam));
      }

    };
}

// phuong thuc mapStateToProps bien state cua redux ve props truyen vao component
export default connect(mapStateToProps,mapDispatchToProps)(ModalGioHangRedux);
