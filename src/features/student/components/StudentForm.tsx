import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { InputField, RadioGroupField } from '../../../components/FormFields';
import { Student } from '../../../models';

export interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValues: Student) => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  age: yup.number().positive().integer().required('Please enter age'),
  mark: yup.number().positive().required('Please enter mark'),
  gender: yup.string().oneOf(['male', 'female'], 'Please select your sex').required(),
  city: yup.string().required('Please select your city'),
});

const StudentForm = ({ initialValues, onSubmit }: StudentFormProps) => {
  const [error, setError] = useState<string>('');
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Student>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: Student) => {
    console.log('formValues', formValues);

    try {
      setError('');
      await onSubmit?.(formValues);
    } catch (error) {
      console.log(error);
      // setError(error);
    }
  };

  return (
    <Box p={3}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputField name="name" control={control} label="Full Name" />
          </Grid>

          <Grid item xs={6}>
            <InputField name="age" control={control} label="Age" type="number" />
          </Grid>

          <Grid item xs={6}>
            <InputField name="mark" control={control} label="Mark" type="number" />
          </Grid>

          <Grid item xs={6}>
            <InputField name="city" control={control} label="City" />
          </Grid>
          <Grid item xs={6}>
            <RadioGroupField
              name="gender"
              control={control}
              label="Gender"
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
            />
          </Grid>
        </Grid>

        {error && <Alert severity="error">{error}</Alert>}

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress color="secondary" size={16} />}
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default StudentForm;
