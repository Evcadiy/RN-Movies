import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"

const PersonPage = () => {
	const { id } = useLocalSearchParams()

	return (
		<View>
			<Text>Person {id}</Text>
		</View>
	)
}

export default PersonPage
