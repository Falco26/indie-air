import { RootState } from "../store"

export const selectDeparture = (state: RootState) => state.search.departure
export const selectArrival = (state: RootState) => state.search.arrival
