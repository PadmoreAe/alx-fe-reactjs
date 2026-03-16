import {create} from 'zustand'

const initialState = { message: "" , messageType: ""};

export const useMessageStore = create((set) => ({
  ...initialState,

  setMessage: (message, type = "success") => set({ message, messageType: type }),

  clearMessage: () => set(initialState),
}));