import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BrandSelect({filterShoes}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    filterShoes(event.target.value)
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Prada"}>Prada</MenuItem>
          <MenuItem value={"Dr Martens"}>Dr Martens</MenuItem>
          <MenuItem value={"Carrie Forbes"}>Carrie Forbes</MenuItem>
          <MenuItem value={"Carmina"}>Carmina</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
