import { moviesApi } from "../moviesApi"
import { EMoviesEndpoints } from "../enums"
import { TMovieList } from "../types"

export const moviesBy = moviesApi.injectEndpoints({
	endpoints: builder => ({
		getMoviesByPopular: builder.query<TMovieList, void>({
			query: () => EMoviesEndpoints.POPULAR
		}),
		getMoviesByTopRated: builder.query<TMovieList, void>({
			query: () => EMoviesEndpoints.TOP_RATED
		}),
		getMoviesByUpcoming: builder.query<TMovieList, void>({
			query: () => EMoviesEndpoints.UPCOMING
		}),
		getMoviesByNowPlaying: builder.query<TMovieList, void>({
			query: () => EMoviesEndpoints.NOW_PLAYING
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
