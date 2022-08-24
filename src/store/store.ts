import {configureStore} from '@reduxjs/toolkit'
import { useDispatch,useSelector, TypedUseSelectorHook } from 'react-redux'
import albumReducer from './albumSlice'
import playerReducer from './player'

const store = configureStore({
    reducer: {
        album: albumReducer,
        player: playerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store