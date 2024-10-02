import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TMDB_API_TOKEN } from "react-native-dotenv"

export const personApi = createApi({
	reducerPath: "personApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.themoviedb.org/3/person",
		prepareHeaders(headers) {
			headers.set("Authorization", `Bearer ${TMDB_API_TOKEN}`)
		}
	}),
	tagTypes: ["Person"],
	endpoints: () => ({})
})
