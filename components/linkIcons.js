import Link from 'next/link'

import styles from '../styles/LinkIcons.module.scss'

import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import { yellow, green } from '@material-ui/core/colors'
import { Avatar, Box } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[5],
  },
}));

export function MapIconLink(){
  const classes = useStyles();
  return (
    <Link href="/map">
      <a>
        <Avatar className={classes.large}>
          <MapIcon
            style={{ color: green[500], fontSize: 50 }}
          />
        </Avatar>
      </a>
    </Link>
  )
}

export function WalkIconLink(){
  const classes = useStyles();
  return (
    <Link href="/">
      <a>
        <Avatar className={classes.large}>
          <DirectionsWalkIcon
            style={{ color: green[500], fontSize: 50 }}
          />
        </Avatar>
      </a>
    </Link>
  )
}

export function NotificationIconLink(){
  const classes = useStyles();
  return (
    <>
      <Link href="/notifications">
        <a>
          <Badge badgeContent={4} color="secondary">
            <Avatar className={classes.large}>
              <NotificationsIcon
                style={{ color: yellow[700], fontSize: 50 }}
              />
            </Avatar>
          </Badge>
        </a>      
      </Link>
    </>
  )
}

export function HomeIconLink(){
  const classes = useStyles();
  return (
    <>
      <Link href="#">
        <a>
          <Avatar className={classes.large}>
            <HomeIcon
              style={{ color: green[500], fontSize: 50 }}
            />
          </Avatar>
        </a>      
      </Link>
    </>
  )
}

export function LinkIcons(props){
  return(
    <Box className={styles.linkIconBox}>
      <div className={styles.linkIconWrapper}>
        <HomeIconLink />
      </div>
      <div className={styles.linkIconWrapper}>
        <NotificationIconLink />
      </div>
      <div className={styles.linkIconWrapper}>
        { props.uniqueIconLink }
      </div>
    </Box>
  )
}
