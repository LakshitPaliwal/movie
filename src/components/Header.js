
// import React from 'react';
// import { Link } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux'; //useDispatch is allow to dispatch action to store.js and useSelector is allow to retrieve stuff from store.js
// import { useHistory } from 'react-router-dom';

// import { selectUserName, selectUserEmail, selectUserPhoto } from '../features/user/userSlice';

// import { auth, provider } from "../firebase";


// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import logo from '../images/logo.svg';
// import HomeIcon from '@material-ui/icons/Home';
// import Drawer from '@material-ui/core/Drawer';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import IconButton from '@material-ui/core/IconButton';
// import clsx from 'clsx';
// import MenuIcon from '@material-ui/icons/Menu';
// import Divider from '@material-ui/core/Divider';
// import Avatar from '@material-ui/core/Avatar';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     imgLogo: {
//         padding: '0',
//         width: '80px',
//         marginTop: '4px',
//         maxHeight: '70px',
//         fontSize: '0',
//         display: ' inline-block',
//         marginRight: '10vh'

//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     }, 

//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-end',
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },

// }));

// const Header = (props) => {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     const dispatch = useDispatch();
//     const history = useHistory();
//     const userName = useSelector(selectUserName);
//     const userPhoto = useSelector(selectUserPhoto);

//     const handleAuth = () => {
//         //in next line this is a promise  so parameter is return as result 
//         auth.signInWithPopup(provider).then((result) => {
//             console.log(result);
//         }).catch((error) => {
//             alert(error.message);
//         })
//     }

//     return (
//         <div className={classes.root}>
//                         <Button onClick={handleAuth} color="inherit"><strong>Login</strong></Button>

//             <AppBar className={clsx(classes.appBar, {
//                 [classes.appBarShift]: open,
//             })} style={{ background: '#090b13' }} position="static">
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, open && classes.hide)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" className={classes.title}>
//                         <img className={classes.imgLogo} src={logo} alt="Logo" />
//                         <Link to='/' >
//                             <HomeIcon style={{ fontSize: 40 }} />
//                         </Link>
//                     </Typography>
//                     {userName ? (
//                         <Button onClick={handleAuth} color="inherit"><strong>Login</strong></Button>

//                     ) : (
//                         <>
//                             <Drawer
//                                 className={classes.drawer}
//                                 variant="persistent"
//                                 anchor="left"
//                                 open={open}
//                                 classes={{
//                                     paper: classes.drawerPaper,
//                                 }}
//                             >
//                                 <div className={classes.drawerHeader}>
//                                     <IconButton onClick={handleDrawerClose}>
//                                         {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                                     </IconButton>
//                                 </div>
//                                 <Divider />

//                                 <Divider />
//                                 <Avatar  src={userPhoto} />

//                             </Drawer>
//                         </>
//                     )}
//                 </Toolbar>
//             </AppBar>




//         </div>
//     );
// }

// export default Header;

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

import logo from '../images/logo.svg';
import { Search, Add, Home, Star, Theaters, LiveTv } from '@material-ui/icons';


const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <Home />
              <span>HOME</span>
            </Link>
            <Link to="/home">
              {/* <img src="/images/search-icon.svg" alt="SEARCH" /> */}
              <Search />
              <span>SEARCH</span>
            </Link>
            <Link >
              <Add />
              <span>WATCHLIST</span>
            </Link>
            <Link to="/home">
              <Star />
              <span>ORIGINALS</span>
            </Link>
            <Link to="/home">
              <Theaters />
              <span>MOVIES</span>
            </Link>
            <Link to="/home">
              <LiveTv />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;