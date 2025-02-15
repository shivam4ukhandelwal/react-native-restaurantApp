import {createSlice} from '@reduxjs/toolkit';
import { CartItem} from '../../services/types';

interface initialStateProps {
  cartItems: CartItem[];
  storeId: string | null;
}

const initialState: initialStateProps = {
  cartItems: [],
  storeId: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload: {storeId, cartItem}}) => {
      if (storeId !== state.storeId) {
        return (state = {
          storeId: storeId,
          cartItems: [{...cartItem, quantity: 1}],
        });
      } else {
        const getIndex = state.cartItems?.findIndex(
          i => i.name === cartItem.name,
        );
        let updateItems = [...state.cartItems];
        if (getIndex === -1) {
          cartItem.quantity = 1;
          updateItems = [...updateItems, cartItem];
        } else {
          const currentItem = state.cartItems?.[getIndex];
          if (currentItem?.quantity) {
            updateItems[getIndex] = {
              ...currentItem,
              quantity: currentItem?.quantity + 1,
            };
          }
        }
        state.cartItems = updateItems;
      }
    },
    removeFromCart: (state, {payload}) => {
      const indexToRemove = state.cartItems.findIndex(
        i => i.name === payload.name,
      );
      const currentItem = state.cartItems[indexToRemove];
      if (currentItem.quantity) {
        if (currentItem.quantity > 1) {
          currentItem.quantity = currentItem?.quantity - 1;
          state.cartItems[indexToRemove] = currentItem;
        } else {
          state.cartItems = state.cartItems.filter(
            i => i.name !== payload.name,
          );
        }
      }
    },
    emptyCart: () => {
      return {storeId: null, cartItems: []};
    },
  },
});

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
