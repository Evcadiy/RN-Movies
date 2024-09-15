import { View, Text, Button } from "react-native"
import { Link } from "expo-router"
import { router } from "expo-router"
const MovieListPage = () => {
	return (
		<View>
			<Text>MovieListPage</Text>
			<Link href="/movie-list/1">Movie</Link>
			<Button
				title="Go to Movie"
				onPress={() => router.push("/movie-list/2")}
			/>
		</View>
	)
}

export default MovieListPage
