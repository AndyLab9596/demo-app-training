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
import { Link } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router';
import { History } from 'history';

const ListPage = () => {
  const match = useRouteMatch();
  const histroy = useHistory();
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
    // console.log('remove', student);
    const studentId = student?.id;
    try {
      await studentApi.remove(studentId);
      // dispatch lại filer, nhưng vì để filter cũ sẽ tham chiếu tới filter cũ, redux ko hiểu
      // nên phải clone ra để tới tham chiếu mới dẫn đến re-render lại page
      dispatch(studentActions.setFilter({ ...filter }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditStudent = async (student: Student) => {
    histroy.push(`${match.url}/${student.id}`);
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Students</Typography>
        <Link to={`${match.url}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add Student
          </Button>
        </Link>
      </Box>

      <Box mb={3}>
        <StudentSearch filter={filter} onSearchChange={handleSearchChange} />
      </Box>

      {/* Student table */}
      <StudentTable
        studentList={studentList}
        onEdit={handleEditStudent}
        onRemove={handleRemoveStudent}
      />
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
