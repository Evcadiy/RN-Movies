import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

const SMALL_PHONE_MAX_WIDTH = 380
const PHONE_MAX_WIDTH = 767
const IPAD_MIN_WIDTH = 768

export const isSmallPhone = width <= SMALL_PHONE_MAX_WIDTH
export const isPhone = width > SMALL_PHONE_MAX_WIDTH && width <= PHONE_MAX_WIDTH
export const isTablet = width >= IPAD_MIN_WIDTH

export const DEVICE_WIDTH = width
export const DEVICE_HEIGHT = height
export const isLandscape = width > height
