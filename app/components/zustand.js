import { create } from "zustand";

export const useStore = create((set) => ({
    cart:[],
    items:0,
    increase: (payload = {}) =>
      set((state) => {
        // cart: [...state.cart, payload],
        let existingItem = state.cart.find(item => item.name === payload.name);
        if (existingItem) {
          return{
            cart:[...state.cart]
          }
        } else {
          return{
            cart: [...state.cart, payload],
            items: state.items + 1
          }
        }
      }),
      removeItem:(id) => 
        set((state) => {
            const itemToRemove = state.cart.find(item => item.id === id);
            if (itemToRemove) {
              return {
                cart:  state.cart.filter(item => item.id !== id),
                items: state.items - 1
              };
            } else {
              return state; // No change if item not found
            }
        })
      
}));