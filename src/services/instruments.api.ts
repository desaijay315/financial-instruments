import { TableItem } from '../components/Table/types'
import { mockData } from '../mockData/ticker'

// Simulated API response
export const InstrumentsData = async (): Promise<TableItem[]> => {
    return Promise.resolve(mockData)
}
