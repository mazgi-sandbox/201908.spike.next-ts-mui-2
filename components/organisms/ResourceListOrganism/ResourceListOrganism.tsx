import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"
import ObjectStorage from '../../../lib/resource/virtual/object-storage'

function createData() {
  const id = Math.random().toString(36).substring(6)
  const location = 'us-central-1'
  const tags = [
    'tag1', 'tag2'
  ]
  const obj = new ObjectStorage(id, location, tags)
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
          <TableCell>Location</TableCell>
          <TableCell>Tags</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.location}</TableCell>
            <TableCell>{row.tags.join(', ')}</TableCell>
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
