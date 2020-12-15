import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "gatsby-theme-material-ui"
import MenuIcon from "@material-ui/icons/Menu"
import PinDropIcon from "@material-ui/icons/PinDrop"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import ExploreIcon from "@material-ui/icons/Explore"
import HouseIcon from "@material-ui/icons/House"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import CategoryIcon from "@material-ui/icons/Category"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    paddingLeft: theme.spacing(2),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function Layout({ title, children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [lands, housing, rents, proyects] = [1, 2, 3, 4]
  const [subList, setSubList] = React.useState(null)
  const handleSubList = subList => () => {
    if (!open) setOpen(true)
    setSubList(prevSubList => (prevSubList === subList ? null : subList))
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    setSubList(null)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
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
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={handleSubList(lands)}>
            <ListItemIcon>
              <PinDropIcon />
            </ListItemIcon>
            <ListItemText primary="Lotes y Terrenos" />
          </ListItem>
          <Collapse in={subList === lands} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/lots-lands/sales">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Ventas" />
                </ListItem>
              </Link>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="Proyectos" />
              </ListItem>
            </List>
          </Collapse>
          <Divider />

          <ListItem button>
            <ListItemIcon>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText primary="Casas" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary="Alquileres" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Proyectos Particulares" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}
