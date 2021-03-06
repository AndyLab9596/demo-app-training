import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import { useAppDispatch } from '../../app/hook';
import { authActions } from '../../features/auth/authSlice';
import Dashboard from '../../features/dashboard';
import StudentFeature from '../../features/student';
import { Header, Main, Sidebar, StyledLink, Title, Wrapper, WrapperSidebar } from './Admin.style';

export interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <Fragment>
      <Header>
        <AppBar position="static">
          <Toolbar>
            <Title>Management</Title>
            <Button color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Header>
      <Wrapper>
        <Sidebar>
          <WrapperSidebar>
            <List component="nav" aria-label="main mailbox folders">
              <StyledLink to="/admin/dashboard">
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </StyledLink>

              <StyledLink to="/admin/student">
                <ListItem button>
                  <ListItemIcon>
                    <EmojiPeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Student" />
                </ListItem>
              </StyledLink>
            </List>
          </WrapperSidebar>
        </Sidebar>
        <Main>
          <Switch>
            <Route path="/admin/dashboard">
              <Dashboard />
            </Route>
            <Route path="/admin/student">
              <StudentFeature />
            </Route>
          </Switch>
        </Main>
      </Wrapper>
    </Fragment>
  );
};

export default AdminLayout;
