import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ListItemIcon, ListItemText, ListItem, Menu, Button, MenuItem, Fade, Box } from "@material-ui/core";

import { history } from '../../redux/_helpers';
import * as routes from "../../utils/routes.json";

const drawerWidth = 240;
const toolbarHeight = '48px';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: `calc(100% - ${toolbarHeight})`,
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
  menuButton: {
    marginRight: theme.spacing(0),
    borderRadius: 0,
    color: "rgba(0,0,0,0.5)",
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  toolbarReset:{
    minHeight: toolbarHeight,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
  },
  toolbarHead:{
      height: toolbarHeight
  },
  titleH:{
      marginLeft: theme.spacing(2)
  },
  list:{
      paddingTop: 0
  },
  children:{
    padding: theme.spacing(1)
  }
}));

function SimpleMenu({ handleRedirect, toggleDrawer, ...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <i style={{ fontSize: '32px' }} class="material-icons">
          account_box
        </i>
      </Button>
      <Menu
        id="fade-menu"
        style={{ marginTop: '2em' }}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        {/* <MenuItem onClick={toggleDrawer('right', true)}>Preferencias</MenuItem> */}
        <MenuItem onClick={() => handleRedirect('/')}>Deslogar</MenuItem>
      </Menu>
    </>
  )
}

export default function MiniDrawer({...props}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRedirect = (path) => {
    history.push(`${path}`);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbarReset}>
          <Box style={{width: "100%"}} display="flex" alignItems="center">
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box flexGrow={1}>
              <Typography className={classes.titleH} variant="h6" noWrap>
                {props.title}
              </Typography>
            </Box>
            <Box>
              <SimpleMenu handleRedirect={handleRedirect} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}>
            <ListItem onClick={() => handleRedirect(routes.dash.route)} button key={'Dash'}>
                <ListItemIcon>
                    <i class="material-icons">
                        dashboard
                    </i>
                </ListItemIcon>
                <ListItemText primary={routes.dash.menu} />
            </ListItem>
            <Divider />
            <ListItem onClick={() => handleRedirect(routes.analysis.route)} button key={'Dash'}>
                <ListItemIcon>
                    <span class="material-icons">
                        supervisor_account
                    </span>
                </ListItemIcon>
                <ListItemText primary={routes.analysis.menu} />
            </ListItem>
            <Divider />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbarHead} />
        <div className={classes.children}>
          {props.children}
        </div>
      </main>
    </div>
  );
}