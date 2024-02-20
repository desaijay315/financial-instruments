import { useReducer, useEffect } from 'react'
import { TableItem } from '../../components/Table/types'
import { sortReducer } from './sortReducer'
import { initialState } from '../sort/initialState'
import { SET_DATA, TOGGLE_SORT } from '../../utils/constants'
import { ColumnName, sortDirection } from '../../common/types'

type Sort = {
    sortedData: TableItem[]
    toggleSort: (columnName: ColumnName) => void
    sortConfig: {
        assetClass: sortDirection
        price: sortDirection
        ticker: sortDirection
    }
}

export const useSort = (initialData: TableItem[]): Sort => {
    const [{ data, sortConfig }, dispatch] = useReducer(
        sortReducer,
        initialState
    )

    //dispatch to get the initial data
    useEffect(() => {
        dispatch({ type: SET_DATA, payload: initialData })
    }, [initialData])

    const toggleSort = (columnName: ColumnName): void => {
        dispatch({ type: TOGGLE_SORT, columnName })
    }

    return { sortedData: data, toggleSort, sortConfig }
}
