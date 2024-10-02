import { useCallback, useMemo, useState } from "react"
import { FlatList, SafeAreaView, View } from "react-native"
import MovieItem from "./MovieItem"
import CustomList from "./CastomList"
import { TMovie } from "@/redux/movie/types"
import {
	DEVICE_HEIGHT,
	DEVICE_WIDTH,
	isSmallPhone,
	isTablet
} from "@/constants/deviceDimensions"
import Pagination from "../UI/Pagination"

interface IMoviesScrollListProps {
	movies: TMovie[]
	title?: string
	href?: string
	horizontal?: boolean
	onLoadMore?: () => void
	isLoading?: boolean
	hasMore?: boolean
}

const MoviesScrollList = ({
	movies,
	title,
	href,
	horizontal = true,
	onLoadMore,
	isLoading,
	hasMore
}: IMoviesScrollListProps) => {
	const [isLoadMorePressed, setIsLoadMorePressed] = useState(false)

	const renderMovieItem = useCallback(
		({ item }: { item: TMovie }) => (
			<View style={{ margin: isTablet ? 20 : 7 }}>
				<MovieItem
					{...item}
					width={
						horizontal
							? isTablet
								? DEVICE_WIDTH * 0.18
								: isSmallPhone
								? DEVICE_WIDTH * 0.25
								: DEVICE_WIDTH * 0.3
							: isTablet
							? DEVICE_WIDTH * 0.2
							: isSmallPhone
							? DEVICE_WIDTH * 0.38
							: DEVICE_WIDTH * 0.43
					}
					height={
						horizontal
							? isTablet
								? DEVICE_HEIGHT * 0.2
								: isSmallPhone
								? DEVICE_HEIGHT * 0.2
								: DEVICE_HEIGHT * 0.2
							: isTablet
							? DEVICE_HEIGHT * 0.23
							: isSmallPhone
							? DEVICE_HEIGHT * 0.3
							: DEVICE_HEIGHT * 0.3
					}
				/>
			</View>
		),
		[horizontal]
	)

	const renderFooter = useMemo(() => {
		if (!isLoadMorePressed && hasMore) {
			return (
				<Pagination
					onLoadMore={() => {
						setIsLoadMorePressed(true)
						onLoadMore && onLoadMore()
					}}
					isLoading={isLoading}
					hasMore={hasMore}
				/>
			)
		}
		return null
	}, [isLoading, hasMore, isLoadMorePressed, onLoadMore])

	const getItemLayout = useCallback(
		(_data: unknown, index: number) => ({
			length: horizontal ? DEVICE_HEIGHT * 0.2 : DEVICE_HEIGHT * 0.3,
			offset: (horizontal ? DEVICE_HEIGHT * 0.2 : DEVICE_HEIGHT * 0.3) * index,
			index
		}),
		[horizontal]
	)

	return (
		<SafeAreaView>
			{movies.length > 0 && (
				<CustomList title={title} href={href}>
					<FlatList
						data={movies}
						renderItem={renderMovieItem}
						keyExtractor={item => item.id.toString()}
						horizontal={horizontal}
						showsHorizontalScrollIndicator={horizontal}
						showsVerticalScrollIndicator={!horizontal}
						contentContainerStyle={{
							marginHorizontal: !horizontal ? "auto" : null
						}}
						style={{
							width: DEVICE_WIDTH,
							height: horizontal
								? isTablet
									? DEVICE_HEIGHT * 0.22
									: isSmallPhone
									? DEVICE_HEIGHT * 0.22
									: DEVICE_HEIGHT * 0.22
								: isTablet
								? DEVICE_HEIGHT * 0.9
								: isSmallPhone
								? DEVICE_HEIGHT * 0.78
								: DEVICE_HEIGHT * 0.8
						}}
						numColumns={horizontal ? 1 : isTablet ? 4 : 2}
						getItemLayout={getItemLayout}
						initialNumToRender={4}
						ListFooterComponent={renderFooter}
						onEndReached={isLoadMorePressed ? onLoadMore : null}
						onEndReachedThreshold={isLoadMorePressed ? 0.5 : null}
					/>
				</CustomList>
			)}
		</SafeAreaView>
	)
}

export default MoviesScrollList
