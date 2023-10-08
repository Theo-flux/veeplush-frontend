import { create } from "zustand";
import { TGetCartResponse } from "../types/global";

interface ICartState {
  cart: Array<TGetCartResponse> | [];
  total: number;
  update: (by: Array<TGetCartResponse> | []) => void;
  updateTotal: (num: number) => void;
}

export const useCartStore = create<ICartState>()((set) => ({
  cart: [],
  total: 0,
  update: (arg) => set(() => ({ cart: arg })),
  updateTotal: (arg) => set(() => ({ total: arg })),
}));
