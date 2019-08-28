import clsx from 'clsx'
import { Divider, makeStyles, Theme, Drawer, IconButton, ListSubheader } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'

import MainMenuListOrganism from '../MainMenuListOrganism'
import SettingMenuListOrganism from '../SettingMenuListOrganism'

export type Props = {
  open?: boolean,
  children?: React.ReactNode,
  drawerCloseHander?: () => void,
}

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

const Component: React.FC<Props> = (props: Props) => {
  const classes = useStyles('')
  const { open, drawerCloseHander } = props

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={drawerCloseHander}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <MainMenuListOrganism />
      <Divider />
      <ListSubheader inset>Settings</ListSubheader>
      <SettingMenuListOrganism />
    </Drawer>
  )
}

Component.defaultProps = {
  open: false,
  drawerCloseHander: () => { },
}

export default Component
