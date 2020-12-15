import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Fab } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}))

function FixedFab({ children, ...props }) {
  const classes = useStyles()
  return (
    <Fab className={classes.fab} {...props}>
      {children}
    </Fab>
  )
}

export default FixedFab
