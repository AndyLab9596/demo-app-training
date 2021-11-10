import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hook';
import { studentActions } from '../studentSlice';

const ListPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  }, [dispatch]);

  return <div></div>;
};

export default ListPage;
