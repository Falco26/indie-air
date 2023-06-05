import { SearchState } from "./model"
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit"

const initialState: SearchState = {
  departure: null,
  arrival: null,
}

const searchSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    insertDepart: (state, { payload }: PayloadAction<string>) => {
      state.departure === null
        ? (state.departure = payload)
        : (state.arrival = payload)
    },
    removeDeparture: (state) => {
      state.departure = null
    },
    removeArrival: (state) => {
      state.arrival = null
    },
  },
})

export const searchActions = searchSlice.actions

export default searchSlice.reducer
