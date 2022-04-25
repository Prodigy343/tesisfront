import React from 'react'
import { useDependencyStore } from '../../../../store/dependency'
import { Table } from '../../../../components/table'
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

export const List = () => {
  const fetchDependencies = useDependencyStore((state) => state.fetchDependencies)
  const dependencies = useDependencyStore((state) => state.dependency.dependencyList)
  const columns = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "description",
      accessor: "description"
    },
  ]

  const data = React.useMemo(() => dependencies, [dependencies]);

  return (
    <Table 
      classNames={cx("dependencies-list", "list-table")}
      fetchData={fetchDependencies}
      columns={columns}
      data={useDependencyStore((state) => state.dependency.dependencyList)}
    />
  )
}