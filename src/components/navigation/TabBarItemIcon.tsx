import React from "react"
import Animated, {
	useAnimatedStyle,
	withSpring,
	withTiming
} from "react-native-reanimated"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Feather from "@expo/vector-icons/Feather"

type Props = {
	isFocused: boolean
	name: string
}

export default function TabBarItemIcon({ isFocused, name }: Props) {
	const iconStyle = useAnimatedStyle(() => ({
		opacity: withTiming(isFocused ? 1 : 0.5),
		transform: [
			{
				scale: withSpring(isFocused ? 1.2 : 1)
			}
		]
	}))

	function Icon() {
		switch (name) {
			case "home/index":
				return <Feather name="home" size={24} color="black" />
			case "movie-list/index":
				return <MaterialIcons name="movie" size={24} color="black" />
			default:
				return null
		}
	}

	return (
		<Animated.View style={iconStyle}>
			<Icon />
		</Animated.View>
	)
}
