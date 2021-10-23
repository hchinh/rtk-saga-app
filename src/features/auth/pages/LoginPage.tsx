import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authActions } from '../authSlice';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: '24px',
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);

  const handleLoginClick = () => {
    // TODO: Get username + pwd from login form
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress color="secondary" size={20} />} &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
