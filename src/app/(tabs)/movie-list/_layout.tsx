import { Stack } from "expo-router"

const MovieListLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Movie List" }} />
			<Stack.Screen name="[id]" options={{ title: "Movie Info" }} />
		</Stack>
	)
}

export default MovieListLayout
