import {create} from 'zustand'

const loggingMiddleware = (config) => (set, get, api) => config((args) => {
    console.log('Previous state:', get())
    set(args)
    console.log('Next state:', get())
}, get, api)

export const useStoreMiddleware = create(loggingMiddleware((set) =>({
    count: 0,

    increase: ()=>set((state)=>({count: state.count + 1})),
    decrease: ()=>set((state)=>({count: state.count - 1}))

})))