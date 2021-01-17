import React from 'react';

import './App.css';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Menu from './components/Menu';
import { Context, Provider } from './context';
import { Storefront } from '@material-ui/icons';

import Clients from './components/Clients';
import Products from './components/Products';

const useStyles = makeStyles({
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  onlineStyle: {
    fontWeight: 'bolder',
    color: '#fdd835',
  }
});

const App = () => {

  const classes = useStyles();

  return (
    <Grid container className={classes.centered}>
      <Provider>
        <Context.Consumer>
          {
            context => 
              <Grid item xs={12} className={classes.centered} onClick={() => context.setView('menu')}>
                <Typography variant='h3' style={{ color: '#fff', marginTop: 40, cursor: 'pointer' }}>
                  <Storefront style={{ fontSize: 30 }}/> <span className={classes.onlineStyle}>Online </span>Shopping
                </Typography>
              </Grid>
          }
        </Context.Consumer>
        <Context.Consumer>
          {
            context => {
              switch (context.view) {
                case 'menu':
                  return <Menu />;
                case 'clients':
                  return <Clients />;
                case 'products':
                  return <Products />;
                case 'orders':
                  return <Menu />;
                case 'place-order':
                  return <Menu />;
                default:
                  return;
              }
            }
          }
        </Context.Consumer>
      </Provider>

    </Grid>
  );
  
}

export default App;
