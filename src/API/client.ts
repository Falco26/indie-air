type ApiClientConfig = {
  baseURL: string
  apiKey?: string
}

const createApiClient = ({ baseURL, apiKey }: ApiClientConfig) => {
  const headers = apiKey ? { api_key: apiKey } : undefined

  return {
    async get<Response>(resource: string) {
      const response = await fetch(`${baseURL}/${resource}`, {
        headers,
      })
      const body = await response.json()

      return body as Response
    },

    async post<Response>(resource: string, data: any) {
      const response = await fetch(`${baseURL}/${resource}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
      const body = await response.json()

      return body as Response
    },
  }
}

export const apiClient = createApiClient({
  baseURL: process.env.REACT_APP_BASE_URL!,
  apiKey: process.env.REACT_APP_API_KEY,
})
