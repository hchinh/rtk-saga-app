import { Search } from '@mui/icons-material';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box } from '@mui/system';
import { City, ListParams } from 'models';
import React, { ChangeEvent } from 'react';

export interface StudentFiltersProps {
  filter: ListParams;
  cityList: City[];

  onChange?: (newFilter: ListParams) => void;
  onSearchChange?: (newFilter: ListParams) => void;
}

const StudentFilters = ({ filter, cityList, onChange, onSearchChange }: StudentFiltersProps) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;

    const newFilter = {
      ...filter,
      name_like: e.target.value,
    };

    onSearchChange(newFilter);
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="standard" size="small">
            <InputLabel htmlFor="searchByName">Search by name</InputLabel>
            <Input
              id="searchByName"
              defaultValue={filter.name_like || ''}
              endAdornment={<Search />}
              onChange={handleSearchChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentFilters;
