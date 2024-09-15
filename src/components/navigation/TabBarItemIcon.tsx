import React from "react"
import Animated, {
	useAnimatedStyle,
	withSpring,
	withTiming
} from "react-native-reanimated"
import MovieIcon from "@expo/vector-icons/MaterialIcons"
import Feather from "@expo/vector-icons/Feather"
import PersonIcon from "@expo/vector-icons/MaterialIcons"

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
		],
		marginLeft: name === "person-list" ? 5 : 0
	}))

	function Icon() {
		switch (name) {
			case "home":
				return <Feather name="home" size={24} color="black" />
			case "movie-list":
				return <MovieIcon name="movie" size={24} color="black" />
			case "person-list":
				return <PersonIcon name="person-search" size={26} color="black" />
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
