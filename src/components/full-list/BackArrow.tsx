import { View, Text } from "react-native"
import React from "react"
import { useRouter } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
const BackArrow = () => {
	const router = useRouter()

	return (
		<View>
			<Text className="position-absolute top-1 left-6">
				<Ionicons
					name="arrow-back-sharp"
					size={24}
					color="white"
					onPress={() => router.back()}
				/>
			</Text>
		</View>
	)
}

export default BackArrow
