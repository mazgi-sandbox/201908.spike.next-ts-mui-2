import Link from 'next/link'
import rison from 'rison'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Storage from '@material-ui/icons/Storage'
import { ResourceFilter, ResourceType } from '../../../lib/resource/ResourceFilter'

const filterValue: ResourceFilter = {
  resourceTypes: ResourceType.ObjectStorage,
}
const query = rison.encode_object(filterValue)
const href = `/resources?${query}`

const Component: React.FC = () => (
  <Link href={href}>
    <ListItem button>
      <ListItemIcon>
        <Storage />
      </ListItemIcon>
      <ListItemText primary="ObjectStorages" />
    </ListItem>
  </Link>
)

export default Component
