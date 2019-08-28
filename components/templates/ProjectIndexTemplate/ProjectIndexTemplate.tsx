import clsx from 'clsx'
import { useState } from 'react'
import { CssBaseline, Toolbar, Drawer, IconButton, Divider, List, AppBar, Typography, Badge, Container, ListSubheader } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ChevronLeft, Menu, Notifications } from '@material-ui/icons'

import DefaultHeaderOrganism from '../../organisms/DefaultHeaderOrganism'
import DefaultSideMenuOrganism from '../../organisms/DefaultSideMenuOrganism'
import MainMenuListOrganism from '../../organisms/MainMenuListOrganism'
import SettingMenuListOrganism from '../../organisms/SettingMenuListOrganism'
import ProjectListOrganism from '../../organisms/ProjectListOrganism'
import DefaultFooterOrganism from '../../organisms/DefaultFooterOrganism'

export type Props = {
  title?: string,
  children?: React.ReactNode,
}

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },

  title: {
    flexGrow: 1,
  },

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

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Component: React.FC<Props> = (props: Props) => {
  const classes = useStyles('')
  const [open, setOpen] = useState(true)
  const handleDrawerOpen = () => {
    setOpen(true);
    console.log(`handleDrawerOpen, open: ${open}`)
  }
  const handleDrawerClose = () => {
    setOpen(false);
    console.log(`handleDrawerClose, open: ${open}`)
  }
  const { title } = props

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <Menu />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <DefaultSideMenuOrganism
        open={open}
        drawerCloseHander={handleDrawerClose}
      /> */}
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <MainMenuListOrganism />
        <Divider />
        <ListSubheader inset>Settings</ListSubheader>
        <SettingMenuListOrganism />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
        <DefaultFooterOrganism />
      </main>
    </div>
  )
}

Component.defaultProps = {
  title: 'Projects',
  children: <ProjectListOrganism />,
}

export default Component
