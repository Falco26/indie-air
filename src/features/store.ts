import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./search/reducer"

const rootReducer = {
  search: searchReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}
