import { AirportDto } from "../../API/types"

export type SearchState = {
  departure: null | AirportDto
  arrival: null | AirportDto
}
