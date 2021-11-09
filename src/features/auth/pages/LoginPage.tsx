import { Box, Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useAppDispatch } from '../../../app/hook';
import { authActions } from '../authSlice';
import { Header, LoginArea, Wrapper } from './LoginPage.styles';

export interface LoginProps {}

const LoginPage = (props: LoginProps) => {
  const dispatch = useAppDispatch();

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

        <Box m={4}>
          <Button fullWidth variant="outlined" color="primary" onClick={handleLogin}>
            Login
          </Button>

          <Button fullWidth variant="outlined" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </LoginArea>
    </Wrapper>
  );
};

export default LoginPage;
