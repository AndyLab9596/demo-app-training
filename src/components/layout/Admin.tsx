import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useAppDispatch } from '../../app/hook';
import { authActions } from '../../features/auth/authSlice';

export interface AdminLayoutProps {}

export const AdminLayout = (props: AdminLayoutProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <Box m={2}>
        <Button fullWidth variant="outlined" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default AdminLayout;
