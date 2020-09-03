import React from 'react'
import { useHistory } from "react-router";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  navLinks: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  let history = useHistory()

  const loggedIn = () => {
    history.push('/account/login')
  }

  const viewCart = () => {
    history.push('/cart')
  }
  
  return (
    <div className={classes.root}>
      
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
        Your Shake
      </Typography>
      
      <div className="navLinks">
       <Link to="/Products">Products</Link>
      </div>
      <IconButton edge="start" className={classes.signinButton} color="inherit" aria-label="user">
       <PersonOutlineRoundedIcon/>
     </IconButton>
      <Button color="inherit" onClick={() => loggedIn()} >Signin</Button>
      <IconButton edge="start" className={classes.cartButton} color="inherit" aria-label="cart">
       <ShoppingCartOutlinedIcon onClick={() => viewCart()}/>
     </IconButton>
    </Toolbar>
 
</div>
    // <nav>
    //   <section className="companyName">
    //     <h1>Your Shake</h1>
    //     <div className="navContent">
    //       <div className="navLinks">
    //         <Link to="/Products">Products</Link>
    //       </div>
    //     </div>
    //   </section>
    // </nav>
  )
}

 



 


 
 
 

 