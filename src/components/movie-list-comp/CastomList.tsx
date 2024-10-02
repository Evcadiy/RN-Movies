import { isSmallPhone } from "@/constants/deviceDimensions"
import { Link, usePathname } from "expo-router"
import { ReactNode } from "react"
import { View, Text } from "react-native"

const CustomList = ({
	children,
	title,
	href
}: {
	children: ReactNode
	title?: string
	href?: string
}) => {
	const pathname = usePathname()

	const isFullList = pathname.includes("full-list")

	return (
		<View>
			<View className={`flex-row justify-between ${isFullList ? "" : "p-4"}`}>
				<Text
					className={`text-white ${isSmallPhone ? "text-xl " : "text-2xl"}`}
				>
					{title}
				</Text>
				{href && (
					<Link
						className={`color-yellow-600 ${
							isSmallPhone ? "text-lg" : "text-xl"
						}`}
						href={href}
					>
						See all
					</Link>
				)}
			</View>
			{children}
		</View>
	)
}

export default CustomList
