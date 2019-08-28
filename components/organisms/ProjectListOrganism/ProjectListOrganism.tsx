import Link from 'next/link'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import Project from '../../../lib/project'

function createData() {
  const id = Math.floor(Math.random() * Math.floor(1000))
  const rnd = Math.random().toString(36).substring(6)
  const name = `prj-${rnd}`
  const obj = new Project(id, name)
  return obj
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
]

export type Props = {
  rows?: Array<any>
}

const Component: React.FC<Props> = (props: Props) => {
  const rows = props.rows

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <Link href={`/projects/${row.id}`}>
                <a>{row.id}</a>
              </Link>
            </TableCell>
            <TableCell>
              <Link href={`/projects/${row.id}`}>
                <a>{row.name}</a>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

Component.defaultProps = {
  rows: rows
}

export default Component
