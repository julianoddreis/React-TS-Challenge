const BASE_URL = 'http://image.tmdb.org/t/p/original'

export const getImageUrl = (path: string) => `${BASE_URL}${path}`
