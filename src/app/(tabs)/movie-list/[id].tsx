import { useLocalSearchParams } from "expo-router"
import { View, Text, SafeAreaView } from "react-native"

const MoviePage = () => {
	const { id } = useLocalSearchParams()

	return (
		<SafeAreaView>
			<Text>Movie {id}</Text>
		</SafeAreaView>
	)
}

export default MoviePage
