import React, { useEffect } from 'react';
import { useAppDispatch } from '../../app/hook';
import { dashboardActions } from './dashboardSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return <div>Dashboard</div>;
};

export default Dashboard;
