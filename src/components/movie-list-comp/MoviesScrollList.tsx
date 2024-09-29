import React, { useState } from "react"
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

	// Item // ===========================================================

	const renderMovieItem = ({ item }: { item: TMovie }) => (
		<View style={{ margin: 7 }}>
			<MovieItem
				{...item}
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

	// Footer // =============================================================

	const renderFooter = () => {
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
	}
	const getItemLayout = (_data: unknown, index: number) => ({
		length: horizontal ? DEVICE_HEIGHT * 0.2 : DEVICE_HEIGHT * 0.3,
		offset: (horizontal ? DEVICE_HEIGHT * 0.2 : DEVICE_HEIGHT * 0.3) * index,
		index
	})

	// Render //==============================================================

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
							paddingHorizontal: horizontal ? 0 : 14
						}}
						style={{
							width: DEVICE_WIDTH,
							height: horizontal ? DEVICE_HEIGHT * 0.2 : DEVICE_HEIGHT * 0.8
						}}
						numColumns={horizontal ? 1 : 2}
						getItemLayout={getItemLayout}
						ListFooterComponent={renderFooter}
						onEndReached={isLoadMorePressed ? onLoadMore : null}
						onEndReachedThreshold={isLoadMorePressed ? 1 : null}
					/>
				</CustomList>
			)}
		</SafeAreaView>
	)
}

export default MoviesScrollList
