import { create } from "zustand"
import {devtools, persist} from 'zustand/middleware'

const initialState = {count: 0, loading: false, data: []}

const useCounterStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        increase: async () => {
          await new Promise((r) => setTimeout(r, 1000));
          set((state) => ({ count: state.count + 1 }));
        },
        doubleCount: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const double = get().count;
          set({ count: double * 2 });
        },

        decrease: async () => {
          await new Promise((r) => setTimeout(r, 1000));
          set((state) => ({ count: state.count - 1 }));
        },
        reset: async () => {
          await new Promise((r) => setTimeout(r, 1000));
          set({ count: 0 });
        },

        // fetching data
        fetchData: async () => {
          try {
            set({ loading: true, error: null });

            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts",
            );
            const data = await response.json();
            set({ data: data, loading: false });
          } catch (error) {
            set({ error: error.message, loading: false });
          }
        },
      }), //persist
      {
        name: "counter-storage",
        getStorage: () => localStorage,
      },
    ),
  ),
);

export default useCounterStore