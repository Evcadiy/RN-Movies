import { Provider } from "react-redux"
import "../global.css"
import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import store from "@/redux/store"
export default function Layout() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</Provider>
		</SafeAreaProvider>
	)
}
