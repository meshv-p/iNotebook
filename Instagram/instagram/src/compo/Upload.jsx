import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none"
});
export const Upload = () => {

  const [files,setFile]=useState([]);
  const handlerFile=(e)=>{    
    console.log(e.target.files);
    
    let allfiles=[]
   for(let i=0;i<e.target.files.length;i++){
    allfiles.push(e.target.files[i]);
   }
    if(allfiles.length>0){
      setFile(allfiles);  
    }
  };



  return (
    <>
      <Typography
        className="text-center m-2"
        variant="h5"
        color="textSecondary"
      >
        Add Your Post...
      </Typography>

      <Stack
        className="flex justify-center"
        direction="row"
        alignItems="center"
        spacing={2}
      >
            

            <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple  type="file" onChange={handlerFile} />
          
            <Button variant="contained" component="span" >
              Upload
            </Button>
          </label>

        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="contained-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Button variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </IconButton>
        </label>
      </Stack>

      {files.map((file, key) => {
                            return (
                                <span key={key} >
                                        <img src={URL.createObjectURL(file)}  alt={file.name} />
                                </span>
                            )
                        })}

    </>
  );
};
