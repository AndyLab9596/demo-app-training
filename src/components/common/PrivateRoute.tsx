import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface PrivateProps {}

export const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = localStorage.getItem('access_token');

  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};
