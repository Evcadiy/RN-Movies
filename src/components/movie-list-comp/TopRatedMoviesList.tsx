import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native"
import CustomList from "./CastomList"
import { useGetMoviesByTopRatedQuery } from "../../redux/movie/endpoints/moviesBy"
import { ERoutes } from "@/config/ERoutes"
import MovieItem from "./MovieItem"

const TopRatedMoviesList = ({
	width,
	height
}: {
	width: number
	height: number
}) => {
	const {
		data: movieList,
		isSuccess,
		isLoading
	} = useGetMoviesByTopRatedQuery()
	const movies = movieList?.results

	if (isLoading) {
		return <Text>Loading...</Text>
	}

	if (!isSuccess) {
		return <Text>Error</Text>
	}

	return (
		<SafeAreaView className="flex-1">
			{movies && (
				<CustomList title="top rated" href={ERoutes.MOVIE_LIST}>
					<ScrollView>
						<FlatList
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerClassName="px-15"
							data={movies}
							renderItem={({ item }) => (
								<View className="mx-2">
									<MovieItem
										{...item}
										width={width * 0.3}
										height={height * 0.2}
									/>
								</View>
							)}
						/>
					</ScrollView>
				</CustomList>
			)}
		</SafeAreaView>
	)
}

export default TopRatedMoviesList
