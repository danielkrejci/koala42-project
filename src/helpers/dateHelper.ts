import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export function parseCETDate(string: string): string {
    const formatCET = '___ MMM DD HH:mm:ss ___ YYYY'
    const date = dayjs(string, formatCET)
    return date.isValid() ? date.format('DD MMM YYYY HH:mm') : '-'
}
