import airports from "./airports.json"
import { AirportDto } from "./types"

export const filteredAirports: AirportDto[] = airports.filter(
  (airport) => airport.iata_code
)
