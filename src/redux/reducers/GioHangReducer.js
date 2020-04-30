import * as ActionType from './../contants/ActionType';

// Khoi tao gia tri ban dau cua store
const stateGioHang = {
  gioHang: []
};

export const GioHangReducer = (state = stateGioHang,action) => {
    // console.log("reducer",action);
  
    switch (action.type) {
      case ActionType.THEM_GIO_HANG: {
        // xu ly logic them gio hang
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(
          spGH => spGH.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          gioHangCapNhat.push(action.spGioHang);
        }

        state.gioHang = gioHangCapNhat;
        return { ...state };
      }; 

      case ActionType.XOA_GIO_HANG_INDEX: {
        let gioHangCapNhat = [...state.gioHang];
        // Xoa gio hang dua vao index
        gioHangCapNhat.splice(action.index, 1);
        // Gan gio hang moi cho state.gioHang => render lai giao dien
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }; 

      case ActionType.XOA_GIO_HANG_MSP: {
        let gioHangCapNhat = [...state.gioHang];
        // Tim index sp dua vao maSP
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
        if (index !== -1) {
          // Xoa gio hang dua vao index
          gioHangCapNhat.splice(action.index, 1);
          // Gan gio hang moi cho state.gioHang => render lai giao dien
          state.gioHang = gioHangCapNhat;
          return { ...state };
        }
      }; break;

      case ActionType.TANG_GIAM_SL:
        {
          const { maSP, tangGiam } = action;
          console.log(action);

          let gioHangCapNhat = [...state.gioHang];
          let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

          if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
          } else {
            if (gioHangCapNhat[index].soLuong > 1) {
              gioHangCapNhat[index].soLuong -= 1;
            }
          }

          state.gioHang = gioHangCapNhat;
          return { ...state };
        }
        

      default: {
        return { ...state };
      }; 
    }
}

