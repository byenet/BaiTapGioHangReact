import * as ActionType from '../contants/ActionType';

export const tangGiamSL = (maSP, tangGiam) =>{
    return {
        type:ActionType.TANG_GIAM_SL,
        maSP, tangGiam
    }
}

export const xoaGioHangMaSP = maSP => {
    return { 
        type:ActionType.XOA_GIO_HANG_MSP,
        maSP
    }
}

export const xoaGioHangIndex = index =>{
    return {
        type: ActionType.XOA_GIO_HANG_INDEX,
        index
    }
}

export const themGioHang = sanPham =>{

    const spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      giaBan: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh
    };

    return {
      type: ActionType.THEM_GIO_HANG,
      spGioHang
    };

    
}