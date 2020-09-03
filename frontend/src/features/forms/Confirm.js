import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { Header } from './Header';


export const Confirm = ({ formData, prevStep, nextStep }) => {
    const classes = useStyles();
    const { first_name, last_name, email, username, password,  } = formData;
    return (
      <>
        <Header title='Confirm User Data' />
        <div>
          <List>
            <ListItem>
              <ListItemText
                primary='First Name'
                secondary={first_name}
                className={classes.textCenter}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Last Name'
                secondary={last_name}
                className={classes.textCenter}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Email'
                secondary={email}
                className={classes.textCenter}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Username'
                secondary={username}
                className={classes.textCenter}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Password'
                secondary={password}
                className={classes.textCenter}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Bio'
                secondary={bio}
                className={classes.textCenter}
              />
            </ListItem>
          </List>
          <div className={classes.textCenter}>
            <Button
              color='secondary'
              variant='contained'
              className={classes.button}
              onClick={() => prevStep()}
            >
              Back
            </Button>
  
            <Button
              color='primary'
              variant='contained'
              className={classes.button}
              onClick={() => nextStep()}
            >
              Confirm & Continue
            </Button>
          </div>
        </div>
      </>
    );
  };
  
  Confirm.propTypes = {
    formData: PropTypes.object.isRequired,
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
  };
  