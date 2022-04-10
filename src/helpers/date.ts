import moment from 'moment'

export const formatDate = (date: string, format = 'MMM DD[,] YYYY') => moment.utc(date).format(format)
