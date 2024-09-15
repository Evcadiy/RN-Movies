import TabBar from "@/components/navigation/TabBar"
import { Tabs } from "expo-router"

const TabsLayout = () => {
	return (
		<Tabs tabBar={props => <TabBar {...props} />}>
			<Tabs.Screen name="movie-list" options={{ headerShown: false }} />
			<Tabs.Screen name="person-list" options={{ headerShown: false }} />
		</Tabs>
	)
}

export default TabsLayout
