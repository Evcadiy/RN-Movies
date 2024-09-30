import { Animated, SafeAreaView, ScrollView, View } from "react-native"
import PopularMoviesList from "@/components/movie-list-comp/PopularMoviesList"
import MoviesScrollList from "@/components/movie-list-comp/MoviesScrollList"
import { useGetMoviesByCategoryQuery } from "@/redux/movie/endpoints/moviesBy"
import { ERoutes } from "@/config/ERoutes"
import { EMoviesEndpoints } from "@/redux/movie/enums"
import { useEffect, useMemo, useRef } from "react"

const MovieListPage = () => {
	const fadeAnim = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1500,
			useNativeDriver: true
		}).start()
	}, [fadeAnim])

	const { data: topRated } = useGetMoviesByCategoryQuery({
		category: EMoviesEndpoints.TOP_RATED,
		page: 1
	})
	const { data: upcoming } = useGetMoviesByCategoryQuery({
		category: EMoviesEndpoints.UPCOMING,
		page: 1
	})
	const { data: nowPlaying } = useGetMoviesByCategoryQuery({
		category: EMoviesEndpoints.NOW_PLAYING,
		page: 1
	})

	const topRatedMovies = useMemo(() => topRated?.results, [topRated])
	const upcomingMovies = useMemo(() => upcoming?.results, [upcoming])
	const nowPlayingMovies = useMemo(() => nowPlaying?.results, [nowPlaying])

	return (
		<SafeAreaView className="flex-1">
			<ScrollView>
				<View className="pb-24">
					<PopularMoviesList />
					<Animated.View style={{ opacity: fadeAnim }}>
						{topRatedMovies && (
							<MoviesScrollList
								movies={topRatedMovies}
								title="Top Rated"
								href={
									ERoutes.MOVIE_LIST +
									ERoutes.FULL_LIST +
									EMoviesEndpoints.TOP_RATED
								}
							/>
						)}
					</Animated.View>
					<Animated.View style={{ opacity: fadeAnim }}>
						{upcomingMovies && (
							<MoviesScrollList
								movies={upcomingMovies}
								title="Up Coming"
								href={
									ERoutes.MOVIE_LIST +
									ERoutes.FULL_LIST +
									EMoviesEndpoints.UPCOMING
								}
							/>
						)}
					</Animated.View>
					<Animated.View style={{ opacity: fadeAnim }}>
						{nowPlayingMovies && (
							<MoviesScrollList
								movies={nowPlayingMovies}
								title="Now Playing"
								href={
									ERoutes.MOVIE_LIST +
									ERoutes.FULL_LIST +
									EMoviesEndpoints.NOW_PLAYING
								}
							/>
						)}
					</Animated.View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default MovieListPage
