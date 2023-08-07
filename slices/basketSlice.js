import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state,action) => {
        const index=state.items.findIndex(e=>e.id==action.payload.id)
       
        if(index!=-1)
        {
            let newBasket=[...state.items];
            newBasket.splice(index,1);
            state.items=[...newBasket];
        }
        return;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItemsWithId=(state, id)=>state.basket.items.filter((e)=>e.id===id)
export const selectBasketItems=(state)=>state.basket.items;
export const selctBasketTotal=(state)=>state.basket.items.reduce((total,item)=>total+=(item.price),0.00)
export default basketSlice.reducer;