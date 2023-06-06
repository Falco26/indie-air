import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AirportDto } from "../../API/types"

export const serviceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.AMADEUS_API_BASE_URL,
    headers: { "x-api-key": process.env.REACT_APP_API_KEY! },
  }),
  endpoints: (builder) => ({
    getFlightsOffer: builder.query<any, any>({
      query: (params) => {
        const queryParams = new URLSearchParams(params)
        return {
          url: `/shopping/flight-offers/${queryParams}`,
        }
      },
    }),
  }),
})

export const { useGetFlightsOfferQuery } = serviceApi
