import { SortingOrder, sortDirection } from '../../../common/types'

export interface TableColumn {
    name: string
    label: string
    sortingOrder?: SortingOrder
    sortingPriority?: string[]
}

export interface TableSchema {
    columns: TableColumn[]
}

export type TableItem = {
    ticker: string
    price: number
    assetClass: string
}

export type SortConfig = {
    assetClass: sortDirection
    price: sortDirection
    ticker: sortDirection
}
