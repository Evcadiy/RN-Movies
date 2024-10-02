export type TMovie = {
	id: number
	genre_ids: number[]
	adult: boolean
	title: string
	overview: string
	backdrop_path: string
	original_language: string
	original_title: string
	popularity: number
	poster_path: string
	release_date: string
	video: boolean
	vote_average: number
	vote_count: number
}

export type TMovieList = {
	page: number
	results: TMovie[]
	total_pages: number
	total_results: number
}
