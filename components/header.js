import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: "white"
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2B2B2B"
  },
}));

export const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar className={classes.toolbar} shadow="none">
        <Typography variant="subtitle1" className={classes.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.defaultProps = {
  title: "",
}