import Link from 'next/link'
import rison from 'rison'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Memory from '@material-ui/icons/Memory'
import { ResourceFilter, ResourceType } from '../../../lib/resource/ResourceFilter'

const filterValue: ResourceFilter = {
  resourceTypes: ResourceType.VirtualMachine,
}
const query = rison.encode_object(filterValue)
const href = `/resources?${query}`

const Component: React.FC = () => (
  <Link href={href}>
    <ListItem button>
      <ListItemIcon>
        <Memory />
      </ListItemIcon>
      <ListItemText primary="VirtualMachines" />
    </ListItem>
  </Link>
)

export default Component
