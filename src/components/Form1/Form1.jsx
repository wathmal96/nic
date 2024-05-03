import * as React from 'react';
import Box from '@mui/material/Box';
import Button1 from "../Button1/Button1";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Label from "../Label/Label";
import { useState } from "react";
import lankaNic from "lanka-nic";
import { Typography } from '@mui/material';
import { compareAsc, format } from "date-fns";

export default function Form1() {

    const [nic, setNic] = useState("")
    const [dateOfBirth1, setdateOfBirth1] = useState('');
    const [gender1, setgender1] = useState('');
    const [age, setAge] = useState('');
    const submit = () => {
        let { dateOfBirth, gender } = lankaNic.getInfoFromNIC(nic);
        // console.log(); ;
        console.log(gender);
        var today = new Date();
        var birthday = format(dateOfBirth, "yyyy-MM-dd")
        setdateOfBirth1(birthday);
        setgender1(gender)
        setAge(today.getFullYear() - new Date(dateOfBirth).getFullYear());
        // setdateOfBirth(dateOfBirth)
        // setgender(gender)
    }

    const clear = () => {
        setNic("")
        setdateOfBirth1("")
        setgender1("")
        setAge('')
    }
    return (
        <Box
            sx={{
                border: 'none',
                borderRadius:"10px",
                width:"fit-content",
                padding:"10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                
            }}
        >
            <TextField value={nic} onChange={(val) => { setNic(val.target.value) }} id="outlined-basic" label="Input NIC" variant="outlined" />
            <br />
            <Button1 name={"Submit"} onClick={() => submit()} />
            <br />
            <Typography variant="h5" gutterBottom>{nic}</Typography>
            <Typography variant="h5" gutterBottom>{dateOfBirth1}</Typography>
            <Typography variant="h5" gutterBottom>{gender1}</Typography>
            <Typography variant="h5" gutterBottom>{age}</Typography>


            <br />
            <Button1 name={"Cancel"} onClick={() => { clear() }} />
        </Box>

    )
}