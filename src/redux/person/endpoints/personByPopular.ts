import { personApi } from "../personApi"
import { TPersonList } from "../types"

export const personByPopular = personApi.injectEndpoints({
	endpoints: builder => ({
		getPersonByPopular: builder.query<TPersonList, void>({
			query: () => "/popular"
		})
	}),
	overrideExisting: false
})

export const { useGetPersonByPopularQuery } = personByPopular
