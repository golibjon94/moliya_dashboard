import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FinanceContext} from "../../Context/context";
import { getChosenInfo } from '../../Reducer/action';
export default function InfoSelect() {
  const [info, setInfo] = React.useState('');
const {dispatch}=React.useContext(FinanceContext)
  const handleChange = (event) => {
    setInfo(event.target.value);
    dispatch(getChosenInfo(event.target.value))
  };

  return (
    <Box sx={{ minWidth: 120,maxWidth:300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tanlash</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={info}
          label="Ma'lumotlar"
          onChange={handleChange}
        >
          <MenuItem value={"ARIZALAR"}>Arizalar soni </MenuItem>
          <MenuItem value={"SUMMA"}>To'langan  summa </MenuItem>
    
        </Select>
      </FormControl>
    </Box>
  );
}
