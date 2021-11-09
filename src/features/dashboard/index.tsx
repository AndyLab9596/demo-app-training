import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistic,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from './dashboardSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistic);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return <div>Dashboard</div>;
};

export default Dashboard;
