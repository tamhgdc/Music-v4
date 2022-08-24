import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface player{
    playerinfo:{
        songid: string,
    imagesong:string,
    namesong: string,
    subnamesong: string,
    nextsong: number
    }
}

const Player: player ={
    playerinfo:{
        songid: "",
    imagesong:"",
    namesong:"Nguyen Dang Quang",
    nextsong:-1,
    subnamesong:"Dep trai hoc gioi"
    }
}

const playerSlice = createSlice( {
    name:"player",
    initialState: Player,
    reducers:{
        addplayer(state,action:PayloadAction<object>){
            state.playerinfo ={
                ...state.playerinfo,
                ...action.payload
            }
        }
    }
})

export const {addplayer} = playerSlice.actions
export default playerSlice.reducer