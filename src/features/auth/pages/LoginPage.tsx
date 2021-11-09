import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import { authActions, selectIsLogging } from '../authSlice';
import { Header, LoginArea, Wrapper } from './LoginPage.styles';

export interface LoginProps {}

const LoginPage = (props: LoginProps) => {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);
  // console.log(isLogging);

  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Wrapper>
      <LoginArea>
        <Header>
          <Typography variant="h5" component="h1" color="secondary" align="center">
            Managements
          </Typography>
        </Header>

        <Box m={2}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            {isLogging ? <CircularProgress size={20} color="secondary" /> : 'login'}
          </Button>
        </Box>
        <Box m={2}>
          <Button fullWidth variant="outlined" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </LoginArea>
    </Wrapper>
  );
};

export default LoginPage;
