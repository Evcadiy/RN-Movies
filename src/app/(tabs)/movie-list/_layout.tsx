import { Stack } from "expo-router"

const MovieListLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: "#1b1b1b" }
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: "Movie List"
				}}
			/>
			<Stack.Screen
				name="[id]"
				options={{
					title: "Movie Info",
					presentation: "modal",
					animation: "fade"
				}}
			/>
			<Stack.Screen
				name="full-list/[category]"
				options={{
					title: "Full List",
					presentation: "modal",
					animation: "fade"
				}}
			/>
		</Stack>
	)
}

export default MovieListLayout
