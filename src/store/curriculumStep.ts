import {create} from 'zustand'

interface indexStepState {
    index:number
    changeIndexStep: (value: number) => void
}
export const indexStepStore = create<indexStepState>((set)=>({
    index: 1,
    changeIndexStep: (indexActive:number) => set (() => ({
        index: indexActive
    }))
}))