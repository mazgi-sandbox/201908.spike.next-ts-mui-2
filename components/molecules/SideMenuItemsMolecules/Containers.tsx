import Link from 'next/link'
import rison from 'rison'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Widgets from '@material-ui/icons/Widgets'
import { ResourceFilter, ResourceType } from '../../../lib/resource/ResourceFilter'

const filterValue: ResourceFilter = {
  resourceTypes: ResourceType.Container,
}
const query = rison.encode_object(filterValue)
const href = `/resources?${query}`

const Component: React.FC = () => (
  <Link href={href}>
    <ListItem button disabled={true}>
      <ListItemIcon>
        <Widgets />
      </ListItemIcon>
      <ListItemText primary='Containers' secondary='under developing' />
    </ListItem>
  </Link>
)

export default Component
