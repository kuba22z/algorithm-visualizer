import {configureStore} from '@reduxjs/toolkit'
import {store} from "next/dist/build/output/store";
import visualizerReducer from "./visualizerSlice";
import drawerReducer from "./drawerSlice";

export default configureStore({
    reducer: {
        visualizer: visualizerReducer,
        drawer: drawerReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch