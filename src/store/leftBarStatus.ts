import {create} from 'zustand'

interface leftBarState{
    status: boolean
    changeStatus: (value: boolean) => void
}
export const leftBarStore = create<leftBarState>((set)=>({
    status: false,
    changeStatus: (newStatus:boolean) => set (() => ({
        status: newStatus
    }))
}))