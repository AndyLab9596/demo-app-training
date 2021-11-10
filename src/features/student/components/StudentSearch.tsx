import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import React from 'react';
import { ListParams } from '../../../models';

export interface StudentSearchProps {
  filter: ListParams;
  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

const StudentSearch = (props: StudentSearchProps) => {
  //   const handleChange = (prop) => (event) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  return (
    <Box mt={2}>
      <FormControl fullWidth variant="outlined">
        {/* <InputLabel htmlFor="search-by-name">Search</InputLabel> */}
        <OutlinedInput
          id="search-by-name"
          //   value={values.amount}
          //   onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">Search</InputAdornment>}
        />
      </FormControl>
    </Box>
  );
};

export default StudentSearch;
