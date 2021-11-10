import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Student } from '../../../models';
import studentApi from '../../../api/studentApi';

const AddEditPage = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const isEdit = !!studentId;
  const [student, setStudent] = useState<Student>();
  useEffect(() => {
    if (!isEdit) return;

    (async () => {
      try {
        const res: Student = await studentApi.getById(studentId);
        setStudent(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isEdit, studentId]);

  console.log('edit', student);

  return (
    <Box>
      <Link to="/admin/student">
        <Box display="flex" justifyContent="flex-start" alignItems="center" p={3}>
          <ChevronLeft />
          <Typography variant="caption">Back to student List</Typography>
        </Box>
      </Link>
      <Box p={1}>
        <Typography variant="h4">{isEdit ? 'Update Student Info' : 'Add new Student'}</Typography>
      </Box>
    </Box>
  );
};

export default AddEditPage;
