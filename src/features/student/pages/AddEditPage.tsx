import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import { Student } from '../../../models';
import studentApi from '../../../api/studentApi';
import StudentForm from '../components/StudentForm';

const AddEditPage = () => {
  const history = useHistory();
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

  // console.log('edit', student);
  const handleFormSubmit = async (formValues: Student) => {
    if (isEdit) {
      await studentApi.update(formValues);
    } else {
      await studentApi.add(formValues);
    }

    history.push('/admin/student');
  };

  const initialValues: Student = {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
    ...student,
  } as Student;

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
      {(!isEdit || Boolean(student)) && (
        <Box mt={3}>
          <StudentForm initialValues={initialValues} onSubmit={handleFormSubmit} />
        </Box>
      )}
    </Box>
  );
};

export default AddEditPage;
