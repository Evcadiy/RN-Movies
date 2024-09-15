import { moviesApi } from "../moviesApi"
import { EMoviesEndpoints } from "../enums"
import { TMovieList } from "../types"

export const moviesBy = moviesApi.injectEndpoints({
	endpoints: builder => ({
		getMoviesByPopular: builder.query<TMovieList, void>({
			query: () => EMoviesEndpoints.POPULAR
		})
	}),
	overrideExisting: false
})

export const { useGetMoviesByPopularQuery } = moviesBy
