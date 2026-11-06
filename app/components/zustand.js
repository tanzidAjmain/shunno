import { create } from "zustand";

export const useStore = create((set) => ({
    cart:[],
    items:0,
    detImage:"",
    desc:"",
    noteDiagraph:"",
    organicPercentage:"",
    producedQty:"",
    ml:"",
    materials:[],
    albumImages:[],
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
      clearCart: () => set({ cart: [], items: 0 }),
      setDetimage: (image) => set({ detImage: image }),
      setDesc: (description) => set({ desc: description }),
      setNoteDiagraph: (diagraph) => set({ noteDiagraph: diagraph }),
      setMoreImages: (images) => set({ albumImages: images }),
      setOrganicPercentage: (percentage) => set({ organicPercentage: percentage }),
      setProducedQty: (qty) => set({ producedQty: qty }),
      setMl: (ml) => set({ ml }),
      setMaterials: (materials) => set({ materials }),
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
        }),   
      
}));
