import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

export default class BTGioHangRedux extends Component {
    render() {
        return (
            <div className="container">'
                <h1 className="text-center text-success my-5">Bài Tập Giỏ Hàng Redux</h1>
                <ModalGioHangRedux/>
                <DanhSachSanPhamRedux/>
            </div>
        )
    }
}
