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
import StudentSearch from '../components/StudentSearch';
import { ListParams, Student } from '../../../models';
import studentApi from '../../../api/studentApi';

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

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(studentActions.searchDebounce(newFilter));
  };

  const handleRemoveStudent = async (student: Student) => {
    console.log('remove', student);
    const studentId = student?.id;
    try {
      await studentApi.remove(studentId);
      dispatch(studentActions.setFilter({ ...filter }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Students</Typography>
        <Button variant="contained" color="primary">
          Add Student
        </Button>
      </Box>

      <Box mb={3}>
        <StudentSearch filter={filter} onSearchChange={handleSearchChange} />
      </Box>

      {/* Student table */}
      <StudentTable studentList={studentList} onRemove={handleRemoveStudent} />
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
