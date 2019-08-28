import Link from 'next/link'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import GroupWork from '@material-ui/icons/GroupWork'

const Component: React.FC = () => (
  <Link href='/projects'>
    <ListItem button>
      <ListItemIcon>
        <GroupWork />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
  </Link>
)

export default Component
