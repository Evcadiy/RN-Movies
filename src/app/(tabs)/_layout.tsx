import TabBar from "@/components/navigation/TabBar"
import { Tabs } from "expo-router"
import { StatusBar } from "expo-status-bar"

const TabsLayout = () => {
	return (
		<>
			<StatusBar style="light" backgroundColor={"transparent"} translucent />
			<Tabs tabBar={props => <TabBar {...props} />}>
				<Tabs.Screen name="movie-list" options={{ headerShown: false }} />
				<Tabs.Screen name="person-list" options={{ headerShown: false }} />
			</Tabs>
		</>
	)
}

export default TabsLayout
