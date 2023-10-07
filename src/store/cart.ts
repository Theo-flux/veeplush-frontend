import { create } from "zustand";
import { TGetCartResponse } from "../types/global";

interface ICartState {
  cart: Array<TGetCartResponse> | [];
  update: (by: Array<TGetCartResponse> | []) => void;
}

export const useCartStore = create<ICartState>()((set) => ({
  cart: [],
  update: (arg) => set(() => ({ cart: arg })),
}));
