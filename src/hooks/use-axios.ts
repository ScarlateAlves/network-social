import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = 'https://dogsapi.origamid.dev/json/'

export async function httpAxios({
  url,
  method,
  params,
  headers,
  ...rest
}: AxiosRequestConfig) {
  const result = await axios({
    url,
    method,
    params,
    headers,
    ...rest,
  })
  return result
}
