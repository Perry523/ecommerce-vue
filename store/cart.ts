import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    products: [],
    isModalActive: false,
  }),
  getters: {
    total: (state) => state.products.reduce((sum, item) => sum + item, 0),
  },
  actions: {
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    },
    deleteItem() {
      ''
    }
  },
});
