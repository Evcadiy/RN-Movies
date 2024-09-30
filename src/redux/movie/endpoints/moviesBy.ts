import { moviesApi } from "../moviesApi"
import { EMoviesEndpoints } from "../enums"
import { TMovieList } from "../types"

export const moviesBy = moviesApi.injectEndpoints({
	endpoints: builder => ({
		getMoviesByCategory: builder.query<
			TMovieList,
			{ category: EMoviesEndpoints; page?: number }
		>({
			query: (
				{ category, page } = { category: EMoviesEndpoints.POPULAR, page: 1 }
			) => `${category}?page=${page}`
		})
	}),
	overrideExisting: false
})

export const { useGetMoviesByCategoryQuery } = moviesBy
