import { useEffect, useState } from 'react'
import { InstrumentsData } from '../services/instruments.api'
import { TableItem } from '../components/Table/types'

interface UseFetchDataReturnType {
    data: TableItem[]
    InstrumentsData: () => Promise<TableItem[]>
}

export const useFetchData = (): UseFetchDataReturnType => {
    const [data, setData] = useState<TableItem[]>([])

    useEffect(() => {
        const fetchAndSetData = async (): Promise<void> => {
            const fetchedData = await InstrumentsData()
            setData(fetchedData)
        }

        fetchAndSetData()
    }, [])

    return { data, InstrumentsData }
}
