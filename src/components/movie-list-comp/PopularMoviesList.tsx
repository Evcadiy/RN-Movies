import { Text, SafeAreaView } from "react-native"
import { useGetMoviesByPopularQuery } from "../../redux/movie/endpoints/moviesBy"
import CustomList from "./CastomList"
import { ERoutes } from "@/config/ERoutes"
import CastomCarousel from "@/components/UI/CastomCarousel"
import MovieItem from "./MovieItem"
import {
	DEVICE_HEIGHT,
	DEVICE_WIDTH,
	isSmallPhone,
	isTablet
} from "@/constants/deviceDimensions"
const PopularMoviesList = () => {
	const { data: movieList, isSuccess, isLoading } = useGetMoviesByPopularQuery()
	const movies = movieList?.results

	if (isLoading) {
		return <Text>Loading...</Text>
	}

	if (!isSuccess) {
		return <Text>Error</Text>
	}

	return (
		<SafeAreaView>
			{movies && (
				<CustomList title="Popular Movies" href={ERoutes.FULL_LIST}>
					<CastomCarousel
						mode="parallax"
						modeConfig={
							isTablet
								? {
										parallaxScrollingScale: 1,
										parallaxAdjacentItemScale: 0.7,
										parallaxScrollingOffset: 620
								  }
								: {
										parallaxScrollingScale: 1,
										parallaxAdjacentItemScale: 0.7,
										parallaxScrollingOffset: 180
								  }
						}
						loop
						autoPlay
						width={DEVICE_WIDTH}
						height={DEVICE_HEIGHT * 0.4}
						data={movies}
						renderItem={({ item }) => (
							<MovieItem
								width={
									isTablet
										? DEVICE_WIDTH * 0.37
										: isSmallPhone
										? DEVICE_WIDTH * 0.49
										: DEVICE_WIDTH * 0.6
								}
								height={DEVICE_HEIGHT * 0.4}
								{...item}
							/>
						)}
					/>
				</CustomList>
			)}
		</SafeAreaView>
	)
}

export default PopularMoviesList
