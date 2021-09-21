import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Name"
          onChange={handleChange}
        >
          <MenuItem value={10}>Charu Mishra</MenuItem>
          <MenuItem value={20}>Mini Pauranik</MenuItem>
          <MenuItem value={30}>Kunal Chopra</MenuItem>
          <MenuItem value={30}>Prakreeti Prasanna</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
