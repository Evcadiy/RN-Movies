import { moviesApi } from "../moviesApi"
import { EMoviesEndpoints } from "../enums"
import { TMovieList } from "../types"

export const moviesBy = moviesApi.injectEndpoints({
	endpoints: builder => ({
		getMoviesByPopular: builder.query<TMovieList, { page?: number }>({
			query: ({ page } = { page: 1 }) =>
				`${EMoviesEndpoints.POPULAR}?page=${page}`
		}),
		getMoviesByTopRated: builder.query<TMovieList, { page?: number }>({
			query: ({ page } = { page: 1 }) =>
				`${EMoviesEndpoints.TOP_RATED}?page=${page}`
		}),
		getMoviesByUpcoming: builder.query<TMovieList, { page?: number }>({
			query: ({ page } = { page: 1 }) =>
				`${EMoviesEndpoints.UPCOMING}?page=${page}`
		}),
		getMoviesByNowPlaying: builder.query<TMovieList, { page?: number }>({
			query: ({ page } = { page: 1 }) =>
				`${EMoviesEndpoints.NOW_PLAYING}?page=${page}`
		})
	}),
	overrideExisting: false
})

export const {
	useGetMoviesByPopularQuery,
	useGetMoviesByTopRatedQuery,
	useGetMoviesByUpcomingQuery,
	useGetMoviesByNowPlayingQuery
} = moviesBy
