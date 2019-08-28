import { List } from '@material-ui/core'
import { Dashboard, Projects, AllResources, VirtualMachines, Containers, ObjectStorages } from '../../molecules/SideMenuItemsMolecules'

const Component: React.FC = () => (
  <List>
    <Dashboard />
    <Projects />
    <AllResources />
    <VirtualMachines />
    <Containers />
    <ObjectStorages />
  </List>
)

export default Component