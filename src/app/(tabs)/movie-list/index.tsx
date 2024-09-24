import { SafeAreaView, ScrollView } from "react-native"
import PopularMoviesList from "@/components/movie-list-comp/PopularMoviesList"
import { View } from "react-native"
import MoviesScrollList from "@/components/movie-list-comp/MoviesScrollList"
import {
	useGetMoviesByNowPlayingQuery,
	useGetMoviesByTopRatedQuery,
	useGetMoviesByUpcomingQuery
} from "@/redux/movie/endpoints/moviesBy"
import { ERoutes } from "@/config/ERoutes"
import { EMoviesEndpoints } from "@/redux/movie/enums"
const MovieListPage = () => {
	return (
		<SafeAreaView className="flex-1">
			<ScrollView>
				<View className="pb-24">
					<PopularMoviesList />
					<MoviesScrollList
						useMoviesQuery={useGetMoviesByTopRatedQuery}
						title="Top Rated"
						href={
							ERoutes.MOVIE_LIST +
							ERoutes.FULL_LIST +
							EMoviesEndpoints.TOP_RATED
						}
					/>
					<MoviesScrollList
						useMoviesQuery={useGetMoviesByUpcomingQuery}
						title="Up Coming"
						href={
							ERoutes.MOVIE_LIST + ERoutes.FULL_LIST + EMoviesEndpoints.UPCOMING
						}
					/>
					<MoviesScrollList
						useMoviesQuery={useGetMoviesByNowPlayingQuery}
						title="Now Playing"
						href={
							ERoutes.MOVIE_LIST +
							ERoutes.FULL_LIST +
							EMoviesEndpoints.NOW_PLAYING
						}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default MovieListPage
