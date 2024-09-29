import MoviesScrollList from "@/components/movie-list-comp/MoviesScrollList"
import {
	useGetMoviesByNowPlayingQuery,
	useGetMoviesByPopularQuery,
	useGetMoviesByTopRatedQuery,
	useGetMoviesByUpcomingQuery
} from "@/redux/movie/endpoints/moviesBy"
import { EMoviesEndpoints } from "@/redux/movie/enums"
import { useLocalSearchParams } from "expo-router"

const CategoryFullList = () => {
	const { category } = useLocalSearchParams()
	const categoryRoute = ("/" + category) as EMoviesEndpoints

	const query = {
		[EMoviesEndpoints.POPULAR]: useGetMoviesByPopularQuery,
		[EMoviesEndpoints.TOP_RATED]: useGetMoviesByTopRatedQuery,
		[EMoviesEndpoints.UPCOMING]: useGetMoviesByUpcomingQuery,
		[EMoviesEndpoints.NOW_PLAYING]: useGetMoviesByNowPlayingQuery
	}[categoryRoute]

	return <MoviesScrollList useMoviesQuery={query} horizontal={false} />
}

export default CategoryFullList
