import { useEffect, useState } from "react"
import MoviesScrollList from "@/components/movie-list-comp/MoviesScrollList"
import { useGetMoviesByCategoryQuery } from "@/redux/movie/endpoints/moviesBy"
import { EMoviesEndpoints } from "@/redux/movie/enums"
import { useLocalSearchParams } from "expo-router"
import { SafeAreaView } from "react-native"
import { TMovie } from "@/redux/movie/types"
import BackArrow from "@/components/full-list/BackArrow"

const CategoryFullListPage = () => {
	const { category } = useLocalSearchParams()
	const categoryRoute = `/${category}` as EMoviesEndpoints

	const [currentPage, setCurrentPage] = useState(1)
	const [movies, setMovies] = useState<TMovie[]>([])

	const { data, isSuccess, isLoading } = useGetMoviesByCategoryQuery({
		category: categoryRoute,
		page: currentPage
	})

	const loadMoreMovies = () => {
		if (!isLoading && data && data.results.length > 0) {
			setCurrentPage(prev => prev + 1)
		}
	}

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

	return (
		<SafeAreaView className="flex-1">
			<BackArrow />
			<MoviesScrollList
				movies={movies}
				horizontal={false}
				onLoadMore={loadMoreMovies}
				isLoading={isLoading}
				hasMore={data && currentPage < data.total_pages}
			/>
		</SafeAreaView>
	)
}

export default CategoryFullListPage
