import React from 'react'
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const Searchbar = () => {
  
  return (
    <div>
   

    {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      {/* <TextField id="filled-basic" label="Search" variant="filled" /> */}
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    {/* </Box> */}

<div>
{/* <TextField
  label="Size"
  id="outlined-size-small"
  defaultValue="Small"
  size="small"
/> */}

<TextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
 {/* <TextField
          label="Size"
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
        /> */}
{/* <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" /> */}
</div>
  
        
    </div>
    
  );
}


        