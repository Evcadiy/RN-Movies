import { Provider } from "react-redux"
import "../global.css"
import { Stack } from "expo-router"
import store from "@/redux/store"
import { SafeAreaProvider } from "react-native-safe-area-context"
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
