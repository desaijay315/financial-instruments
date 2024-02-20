import React from 'react'
import {
    ASC,
    ASSET_CLASS,
    PRICE,
    TICKER,
    UP_ARROW,
    DOWN_ARROW,
} from '../../utils/constants'
import { SortConfig } from './types'
import { ColumnName } from '../../common/types'

interface SortableTableHeaderProps {
    sortConfig: SortConfig
    toggleSort: (columnName: ColumnName) => void
}

const SortableTableHeader: React.FC<SortableTableHeaderProps> = ({
    sortConfig,
    toggleSort,
}) => {
    return (
        <tr>
            <th scope="col" onClick={() => toggleSort(ASSET_CLASS)}>
                Asset Class{' '}
                {sortConfig.assetClass === ASC ? UP_ARROW : DOWN_ARROW}
            </th>
            <th scope="col" onClick={() => toggleSort(PRICE)}>
                Price {sortConfig.price === ASC ? UP_ARROW : DOWN_ARROW}
            </th>
            <th scope="col" onClick={() => toggleSort(TICKER)}>
                Ticker {sortConfig.ticker === ASC ? UP_ARROW : DOWN_ARROW}
            </th>
        </tr>
    )
}

export { SortableTableHeader }
