import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { ListParams } from '../../../models';

export interface StudentSearchProps {
  filter: ListParams;
  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

const StudentSearch = ({ filter, onChange, onSearchChange }: StudentSearchProps) => {
  const handleDebouceSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;

    const newFilter = {
      ...filter,
      name_like: e.target.value,
    };

    onSearchChange(newFilter);
  };

  return (
    <Box mt={2}>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          id="search-by-name"
          startAdornment={<InputAdornment position="start">Search</InputAdornment>}
          onChange={handleDebouceSearch}
        />
      </FormControl>
    </Box>
  );
};

export default StudentSearch;
