import Carousel from "react-native-reanimated-carousel"
import { CarouselRenderItem } from "react-native-reanimated-carousel/lib/typescript/types"

interface ICustomCarouselProps<T> {
	mode?: "horizontal-stack" | "vertical-stack" | "parallax"
	modeConfig?: Record<string, unknown>
	data: T[]
	loop?: boolean
	autoPlay?: boolean
	renderItem: CarouselRenderItem<T>
	width: number
	height: number
}

const CustomCarousel = <T,>({
	mode = "horizontal-stack",
	modeConfig,
	...props
}: ICustomCarouselProps<T>) => {
	return (
		<Carousel
			mode={mode as "horizontal-stack"}
			modeConfig={modeConfig ?? {}}
			scrollAnimationDuration={2000}
			{...props}
		/>
	)
}

export default CustomCarousel
