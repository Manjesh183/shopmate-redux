import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action) {
            const updatedCartList=state.cartList.concat(action.payload);//state here is initialState
            const total= state.total + action.payload.price;
            return{...state,total:total,cartList:updatedCartList}
            //above line means-- other states as it is plus updated cartList
        },
        remove(state, action) {
            const updatedCartList=state.cartList.filter(item=>item.id !==action.payload.id) //here state.cartList has some items/objs;equal conditions are removed
            const total= state.total - action.payload.price;
            return{...state,total:total,cartList:updatedCartList}
        }
    }
});
export const { add, remove } = cartSlice.actions; //add,remove are being exported to other component & can be used anywhere
export const cartReducer = cartSlice.reducer;//to store whole above info to store.js 
//action.payload is the newly added product(object)
//line 17--item is the clicked product in ProductCard