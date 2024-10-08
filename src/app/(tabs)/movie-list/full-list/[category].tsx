import { useEffect, useState } from "react"
import MoviesScrollList from "@/components/movie-list-comp/MoviesScrollList"
import { useGetMoviesByCategoryQuery } from "@/redux/movie/endpoints/moviesBy"
import { EMoviesEndpoints } from "@/redux/movie/enums"
import { useLocalSearchParams } from "expo-router"
import { SafeAreaView } from "react-native"
import { TMovie } from "@/redux/movie/types"
import BackArrow from "@/components/full-list/BackArrow"
import useLoadMore from "@/hooks/useLoadMore"

const CategoryFullListPage = () => {
	const { category } = useLocalSearchParams()
	const categoryRoute = `/${category}` as EMoviesEndpoints

	const [movies, setMovies] = useState<TMovie[]>([])
	const { currentPage, loadMore } = useLoadMore({ data: movies })
	const { data, isSuccess, isLoading } = useGetMoviesByCategoryQuery({
		category: categoryRoute,
		page: currentPage
	})

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
				onLoadMore={loadMore}
				isLoading={isLoading}
				hasMore={data && currentPage < data.total_pages}
			/>
		</SafeAreaView>
	)
}

export default CategoryFullListPage
