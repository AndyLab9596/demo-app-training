import { Box, Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Header, LoginArea, Wrapper } from './LoginPage.styles';

export interface LoginProps {}

const LoginPage = (props: LoginProps) => {
  return (
    <Wrapper>
      <LoginArea>
        <Header>
          <Typography variant="h5" component="h1" color="secondary" align="center">
            Managements
          </Typography>
        </Header>

        <Box m={4}>
          <Button fullWidth variant="outlined" color="primary">
            Login
          </Button>
        </Box>
      </LoginArea>
    </Wrapper>
  );
};

export default LoginPage;
