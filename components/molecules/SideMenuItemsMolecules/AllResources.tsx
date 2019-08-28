import Link from 'next/link'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Devices from '@material-ui/icons/Devices'

const Component: React.FC = () => (
  <Link href='/resources'>
    <ListItem button>
      <ListItemIcon>
        <Devices />
      </ListItemIcon>
      <ListItemText primary="All Resources" />
    </ListItem>
  </Link>
)

export default Component
