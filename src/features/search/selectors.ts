import { RootState } from "../store"

export const selectDeparture = (state: RootState) =>
  state.search.departure?.name
export const selectDepartureIATA = (state: RootState) =>
  state.search.departure?.iata_code
export const selectArrivalIATA = (state: RootState) =>
  state.search.arrival?.iata_code
export const selectArrival = (state: RootState) => state.search.arrival?.name
