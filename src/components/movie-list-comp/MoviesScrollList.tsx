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

interface IMoviesScrollListProps {
	useMoviesQuery: () => {
		data?: TMovieList
		isSuccess: boolean
		isLoading: boolean
	}
	title?: string
	href?: string
	horizontal?: boolean
}

const MoviesScrollList = ({
	useMoviesQuery,
	title,
	href,
	horizontal = true
}: IMoviesScrollListProps) => {
	const { data, isSuccess, isLoading } = useMoviesQuery()

	const movies = useMemo(() => data?.results || [], [data])

	const dataProvider = useMemo(
		() => new DataProvider((r1, r2) => r1.id !== r2.id).cloneWithRows(movies),
		[movies]
	)
	const layoutProvider = useMemo(
		() =>
			new LayoutProvider(
				_index => "NORMAL",
				(type, dim) => {
					if (type === "NORMAL") {
						const itemWidth = horizontal
							? isTablet
								? DEVICE_WIDTH * 0.18
								: isSmallPhone
								? DEVICE_WIDTH * 0.25
								: DEVICE_WIDTH * 0.3
							: DEVICE_WIDTH * 0.43

						const itemHeight = horizontal
							? DEVICE_HEIGHT * 0.2
							: DEVICE_HEIGHT * 0.3

						dim.width = itemWidth + 14
						dim.height = itemHeight + 14
					}
				}
			),
		[horizontal]
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
						horizontal
							? isTablet
								? DEVICE_WIDTH * 0.18
								: isSmallPhone
								? DEVICE_WIDTH * 0.25
								: DEVICE_WIDTH * 0.3
							: DEVICE_WIDTH * 0.43
					}
					height={horizontal ? DEVICE_HEIGHT * 0.2 : DEVICE_HEIGHT * 0.3}
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
						style={{
							flex: 1,
							width: DEVICE_WIDTH,
							height: horizontal ? DEVICE_HEIGHT * 0.2 : DEVICE_HEIGHT,
							padding: horizontal ? 0 : 12
						}}
						layoutProvider={layoutProvider}
						dataProvider={dataProvider}
						rowRenderer={rowRenderer}
						isHorizontal={horizontal}
						scrollViewProps={{
							showsHorizontalScrollIndicator: horizontal,
							showsVerticalScrollIndicator: !horizontal
						}}
					/>
				</CustomList>
			)}
		</SafeAreaView>
	)
}

export default MoviesScrollList
