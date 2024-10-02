import { configureStore } from "@reduxjs/toolkit"
import { personApi } from "./person/personApi"
import { moviesApi } from "./movie/moviesApi"

export const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
		[personApi.reducerPath]: personApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(moviesApi.middleware, personApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export default store
