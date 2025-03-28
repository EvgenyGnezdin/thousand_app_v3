import { configureStore } from "@reduxjs/toolkit";
import addPlayer from "../../featers/AddPlayer/store/AddPlayer";



export const store = configureStore({
    reducer: {
        addPlayer: addPlayer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch