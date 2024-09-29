import React, { useEffect, useState } from "react"
import MoviesScrollList from "@/components/movie-list-comp/MoviesScrollList"
import {
	useGetMoviesByNowPlayingQuery,
	useGetMoviesByPopularQuery,
	useGetMoviesByTopRatedQuery,
	useGetMoviesByUpcomingQuery
} from "@/redux/movie/endpoints/moviesBy"
import { EMoviesEndpoints } from "@/redux/movie/enums"
import { useLocalSearchParams } from "expo-router"
import { View } from "react-native"
import { TMovie } from "@/redux/movie/types"

const CategoryFullListPage = () => {
	const { category } = useLocalSearchParams()
	const categoryRoute = ("/" + category) as EMoviesEndpoints

	const [currentPage, setCurrentPage] = useState(1)
	const [movies, setMovies] = useState<TMovie[]>([])

	// Queries for each category //==========================================

	const query = {
		[EMoviesEndpoints.POPULAR]: useGetMoviesByPopularQuery,
		[EMoviesEndpoints.TOP_RATED]: useGetMoviesByTopRatedQuery,
		[EMoviesEndpoints.UPCOMING]: useGetMoviesByUpcomingQuery,
		[EMoviesEndpoints.NOW_PLAYING]: useGetMoviesByNowPlayingQuery
	}[categoryRoute]

	// Load movies //=========================================================

	const { data, isSuccess, isLoading } = query?.({
		page: currentPage
	}) || {
		data: { results: [] },
		isSuccess: false,
		isLoading: true
	}

	// Load more movies function //===========================================

	const loadMoreMovies = () => {
		if (!isLoading && data && data.results.length > 0) {
			setCurrentPage(prev => prev + 1)
		}
	}

	// Set movies //==========================================================

	useEffect(() => {
		if (data && isSuccess) {
			setMovies(prevMovies => {
				const newMovies = data.results.filter(
					newMovie => !prevMovies.some(movie => movie.id === newMovie.id)
				)
				return [...prevMovies, ...newMovies]
			})
		}
	}, [data, isSuccess])

	// Render //==============================================================

	return (
		<View>
			<MoviesScrollList
				movies={movies}
				horizontal={false}
				onLoadMore={loadMoreMovies}
				isLoading={isLoading}
				hasMore={data && currentPage < data.total_pages}
			/>
		</View>
	)
}

export default CategoryFullListPage
