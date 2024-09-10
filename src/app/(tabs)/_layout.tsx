import TabBar from "@/components/navigation/TabBar"
import { Tabs } from "expo-router"

const TabsLayout = () => {
	return (
		<Tabs tabBar={props => <TabBar {...props} />}>
			<Tabs.Screen name="home/index" options={{ title: "Home" }} />
			<Tabs.Screen name="movie-list/index" options={{ title: "Movie list" }} />
		</Tabs>
	)
}

export default TabsLayout
