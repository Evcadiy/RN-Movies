import { Stack } from "expo-router"

const PersonListLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Person List" }} />
			<Stack.Screen name="[id]" options={{ title: "Person Info" }} />
		</Stack>
	)
}

export default PersonListLayout
