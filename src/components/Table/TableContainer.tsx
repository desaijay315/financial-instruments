import React, { useEffect } from 'react'
import { useFetchData, useSort } from '../../hooks'
import { SortableTableHeader } from './SortableTableHeader'
import TableRow from './TableRow'
import '../../styles/Table.css'
import { TableItem } from './types'

const TableContainer: React.FC = () => {
    const { data, InstrumentsData } = useFetchData()
    const { sortedData, toggleSort, sortConfig } = useSort(data)

    useEffect(() => {
        InstrumentsData()
    }, [InstrumentsData])

    return (
        <div className="container mt-3">
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="thead-dark">
                        <SortableTableHeader
                            sortConfig={sortConfig}
                            toggleSort={toggleSort}
                        />
                    </thead>
                    <tbody>
                        {sortedData.map((item: TableItem, index: number) => (
                            <TableRow key={index} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { TableContainer }
