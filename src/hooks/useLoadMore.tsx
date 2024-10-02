import { TMovieList } from "@/redux/movie/types"
import { useState } from "react"

const useLoadMore = ({ data }: { data: TMovieList["results"] }) => {
	const [currentPage, setCurrentPage] = useState(1)

	const loadMore = () => {
		if (data && data.length > 0) {
			setCurrentPage(prev => prev + 1)
		}
	}

	return {
		currentPage,
		loadMore
	}
}

export default useLoadMore
