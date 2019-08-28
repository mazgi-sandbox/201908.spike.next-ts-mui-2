import Link from 'next/link'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Accessibility from '@material-ui/icons/Accessibility'

const Component: React.FC = () => (
  <Link href='/support'>
    <ListItem button>
      <ListItemIcon>
        <Accessibility />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItem>
  </Link>
)

export default Component
