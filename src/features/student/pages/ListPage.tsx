import { Box, Button, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import StudentTable from '../components/StudentTable';
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentPagination,
  studentActions,
} from '../studentSlice';
import Pagination from '@material-ui/lab/Pagination';

const ListPage = () => {
  const dispatch = useAppDispatch();
  const studentList = useAppSelector(selectStudentList);
  const { _page, _limit, _totalRows } = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  console.log();

  const handleChange = (e: any, page: number) => {
    dispatch(studentActions.setFilter({ ...filter, _page: page }));
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Students</Typography>
        <Button variant="contained" color="primary">
          Add Student
        </Button>
      </Box>

      <Box mb={3}>{/* Filter */}</Box>

      {/* Student table */}
      <StudentTable studentList={studentList} />
      {/* Pagination */}
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(_totalRows / _limit)}
          page={_page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ListPage;
