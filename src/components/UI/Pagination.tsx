import { View, Text, TouchableWithoutFeedback } from "react-native"

interface PaginationProps {
	onLoadMore?: () => void
	isLoading?: boolean
	hasMore?: boolean
}

const Pagination: React.FC<PaginationProps> = ({
	onLoadMore,
	isLoading,
	hasMore
}) => {
	return (
		<View>
			{isLoading && <Text>Loading...</Text>}
			{hasMore && (
				<TouchableWithoutFeedback onPress={onLoadMore}>
					<Text className="p-4 mt-2 mb-8 text-center bg-red-400 text-white font-bold text-xl ">
						Load More
					</Text>
				</TouchableWithoutFeedback>
			)}
		</View>
	)
}

export default Pagination
