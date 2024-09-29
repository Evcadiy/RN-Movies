import { TMDB_API_TOKEN } from "react-native-dotenv"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const moviesApi = createApi({
	reducerPath: "moviesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.themoviedb.org/3/movie",
		prepareHeaders(headers) {
			headers.set("Authorization", `Bearer ${TMDB_API_TOKEN}`)
		}
	}),
	tagTypes: ["Movies"],
	endpoints: () => ({})
})
