import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer';

export const rootReducer = combineReducers ({
    // Noi se chua cac reducer cho nghiep vu (store con)
    
    // ten thuoc tinh GioHangReducer co gia tri la GioHangReducer
    //GioHangReducer : GioHangReducer viet nagn lai bang boc tach
    GioHangReducer
})