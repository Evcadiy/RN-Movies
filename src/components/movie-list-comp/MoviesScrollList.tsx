import { useMemo } from "react"
import { SafeAreaView, Text, View } from "react-native"
import {
	RecyclerListView,
	DataProvider,
	LayoutProvider
} from "recyclerlistview"
import MovieItem from "./MovieItem"
import CustomList from "./CastomList"
import { TMovie, TMovieList } from "@/redux/movie/types"
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

	const movies = useMemo(() => movieList?.results || [], [movieList])

	const dataProvider = useMemo(() => {
		return new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(movies)
	}, [movies])

	const layoutProvider = useMemo(
		() =>
			new LayoutProvider(
				_index => "NORMAL",
				(type, dim) => {
					if (type === "NORMAL") {
						const itemWidth = isTablet
							? DEVICE_WIDTH * 0.18
							: isSmallPhone
							? DEVICE_WIDTH * 0.25
							: DEVICE_WIDTH * 0.3
						const itemHeight = DEVICE_HEIGHT * 0.2

						dim.width = itemWidth + 14
						dim.height = itemHeight
					}
				}
			),
		[]
	)

	const rowRenderer = (
		_type: string | number,
		data: TMovie,
		_index: number
	) => {
		return (
			<View>
				<MovieItem
					{...data}
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
		)
	}

	if (isLoading) {
		return <Text>Loading...</Text>
	}

	if (!isSuccess) {
		return <Text>Error</Text>
	}

	return (
		<SafeAreaView>
			{movies.length > 0 && (
				<CustomList title={title} href={href}>
					<RecyclerListView
						style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT * 0.2 }}
						layoutProvider={layoutProvider}
						dataProvider={dataProvider}
						rowRenderer={rowRenderer}
						isHorizontal={true}
						scrollViewProps={{
							showsHorizontalScrollIndicator: false
						}}
					/>
				</CustomList>
			)}
		</SafeAreaView>
	)
}

export default MoviesScrollList
