import React from 'react'
import { NEGATIVE_PRICE, POSITIVE_PRICE } from '../../utils/constants'
import { TableItem } from './types'

interface TableRowProps {
    item: TableItem
}

const TableRow: React.FC<TableRowProps> = ({ item }) => {
    return (
        <tr className={item.assetClass.toLowerCase()}>
            <td>{item.assetClass}</td>
            <td className={item.price >= 0 ? POSITIVE_PRICE : NEGATIVE_PRICE}>
                {item.price}
            </td>
            <td>{item.ticker}</td>
        </tr>
    )
}

export default TableRow
