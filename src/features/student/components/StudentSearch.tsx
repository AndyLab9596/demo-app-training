import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { ListParams } from '../../../models';

export interface StudentSearchProps {
  filter: ListParams;
  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

const StudentSearch = ({ filter, onChange, onSearchChange }: StudentSearchProps) => {
  const handleDebounceSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;

    onSearchChange({
      ...filter,
      name_like: e.target.value,
    });
  };

  return (
    <Box mt={2}>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          id="search-by-name"
          onChange={handleDebounceSearch}
          startAdornment={<InputAdornment position="start">Search</InputAdornment>}
        />
      </FormControl>
    </Box>
  );
};

export default StudentSearch;
