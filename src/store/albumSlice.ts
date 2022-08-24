import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ablumID{
    albumID: string;
}
const initialState:ablumID ={
    albumID: "ZWZB969E"
}

const albumSlice = createSlice({
    name:"albumid",
    initialState,
    reducers:{
        albumID(state,action:PayloadAction<string>) {
            state.albumID = action.payload
        }
    }
})
export const {albumID} = albumSlice.actions
export default albumSlice.reducer