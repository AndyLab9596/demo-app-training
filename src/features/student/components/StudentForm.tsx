import React from 'react';
import { Student } from '../../../models';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid } from '@material-ui/core';
import { InputField } from '../../../components/FormFields';
export interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValues: Student) => void;
}

const StudentForm = ({ initialValues, onSubmit }: StudentFormProps) => {
  const { control, handleSubmit } = useForm<Student>({
    defaultValues: initialValues,
    // resolver:
  });

  const handleFormSubmit = (formValues: Student) => {
    console.log('formValues', formValues);
  };

  return (
    <Box p={3}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputField name="name" control={control} label="Full Name" />
          </Grid>

          <Grid item xs={6}>
            <InputField name="age" control={control} label="Age" />
          </Grid>

          <Grid item xs={6}>
            <InputField name="mark" control={control} label="Mark" />
          </Grid>

          <Grid item xs={6}>
            <InputField name="gender" control={control} label="Gender" />
          </Grid>

          <Grid item xs={6}>
            <InputField name="city" control={control} label="City" />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default StudentForm;
