export type AirportDto = {
  name: string
  iata_code?: string | undefined
  iaca_code?: string
  lat: number
  lng: number
  country_code: string
}
