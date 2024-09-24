import { FlatList, SafeAreaView, Text, View } from "react-native"
import MovieItem from "./MovieItem"
import CustomList from "./CastomList"
import { TMovieList } from "../../redux/movie/types"
import {
	DEVICE_HEIGHT,
	DEVICE_WIDTH,
	isSmallPhone,
	isTablet
} from "@/constants/deviceDimensions"

interface IMoviesScrollList {
	useMoviesQuery: () => unknown
	title: string
	href: string
}

const MoviesScrollList = ({
	useMoviesQuery,
	title,
	href
}: IMoviesScrollList) => {
	const {
		data: movieList,
		isSuccess,
		isLoading
	} = useMoviesQuery() as {
		data?: TMovieList
		isSuccess: boolean
		isLoading: boolean
	}
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
				<CustomList title={title} href={href}>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerClassName="px-15"
						data={movies}
						keyExtractor={item => item.id.toString()}
						renderItem={({ item }) => (
							<View className={isTablet ? "mx-3" : "mx-2"}>
								<MovieItem
									{...item}
									width={
										isTablet
											? DEVICE_WIDTH * 0.18
											: isSmallPhone
											? DEVICE_WIDTH * 0.25
											: DEVICE_WIDTH * 0.3
									}
									height={DEVICE_HEIGHT * 0.2}
								/>
							</View>
						)}
					/>
				</CustomList>
			)}
		</SafeAreaView>
	)
}

export default MoviesScrollList
