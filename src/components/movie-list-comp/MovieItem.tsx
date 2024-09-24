import { ERoutes } from "@/config/ERoutes"
import { useRouter } from "expo-router"
import { Image, TouchableWithoutFeedback, View } from "react-native"
const MovieItem = ({
	poster_path,
	id,
	width,
	height
}: {
	poster_path: string
	id: number
	width: number
	height: number
}) => {
	const router = useRouter()
	const goToMovie = () => {
		router.push(`${ERoutes.MOVIE_LIST}/${id}`)
	}

	return (
		<View key={id} className="justify-center items-center">
			<TouchableWithoutFeedback onPress={goToMovie}>
				<Image
					source={{
						uri: `https://image.tmdb.org/t/p/w500/${poster_path}`
					}}
					style={{
						width,
						height,
						borderRadius: 12
					}}
				/>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default MovieItem
