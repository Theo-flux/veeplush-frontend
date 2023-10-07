import { create } from "zustand";
import { TCustomerResponse } from "../types/global";

interface ICustomerState {
  customer: Partial<TCustomerResponse>;
  updateCustomer: (arg: Partial<TCustomerResponse>) => void;
}

export const useCustomerStore = create<ICustomerState>()((set) => ({
  customer: {},
  updateCustomer: (arg) => set(() => ({ customer: arg })),
}));
