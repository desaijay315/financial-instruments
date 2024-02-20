import { SET_DATA, TOGGLE_SORT } from '../../utils/constants'
import { TableItem } from '../../components/Table/types'
import { ColumnName } from '../../common/types'

type ToggleSortReturnType = {
    type: string
    columnName: ColumnName
}

type SetDataReturnType = {
    type: string
    payload: TableItem[]
}

export const setData = (payload: TableItem[]): SetDataReturnType => ({
    type: SET_DATA,
    payload,
})

export const toggleSort = (columnName: ColumnName): ToggleSortReturnType => ({
    type: TOGGLE_SORT,
    columnName,
})
