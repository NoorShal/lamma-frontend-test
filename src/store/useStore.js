import { create } from 'zustand';

const useStore = create((set, get) => ({
  // State
  compareList: [],
  wishlist: [],

  // Actions
  toggleCompare: (product) => {
    const { compareList } = get();
    const isInCompare = compareList.find(item => item.id === product.id);

    if (isInCompare) {
      set({ compareList: compareList.filter(item => item.id !== product.id) });
    } else {
      if (compareList.length >= 3) {
        // Using native browser alert for simplicity - in production use proper toast/notification
        alert('You can only compare up to 3 products');
        return;
      }
      set({ compareList: [...compareList, product] });
    }
  },

  toggleWishlist: (productId) => {
    const { wishlist } = get();
    const isInWishlist = wishlist.includes(productId);

    if (isInWishlist) {
      set({ wishlist: wishlist.filter(id => id !== productId) });
    } else {
      set({ wishlist: [...wishlist, productId] });
    }
  },

  isInWishlist: (productId) => {
    return get().wishlist.includes(productId);
  },

  isInCompare: (productId) => {
    return get().compareList.some(item => item.id === productId);
  },

  clearCompare: () => set({ compareList: [] }),
}));

export default useStore;