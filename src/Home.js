import React,{useState, useEffect } from 'react'
import { TextField ,Button } from '@mui/material';
import { useHistory } from "react-router-dom";

function Home() {
  const[firstname,setFirstName] = useState()
  const[lastname,setLastName] = useState()
  const[email,setEmail] = useState()


useEffect(() => {
  localStorage.setItem('firstname', firstname );
  localStorage.setItem('lastname', lastname );
  localStorage.setItem('email', email );
}, [firstname,lastname,email]);
console.log(firstname)

  



  let history = useHistory();

  function handleClick() {
    
    history.push("/page");
  }
  return (
    <>
    <h1 style={{display:"flex",justifycontent:"center"}}>Personal info</h1>
      <div className="txt">
        <TextField
          id="outlined-name"
          label="First Name"
          className='tt'
          value={firstname}
          onChange={(event) => {setFirstName(event.target.value)}}
        />
        <TextField
          id="outlined-name"
          label="Last Name"
          className='tt'
          value={lastname}
          onChange={(event) => {setLastName(event.target.value)}}
          
        />
        <TextField
          id="outlined-name"
          label="Email address"
          className='tt1'
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
          id="outlined-name"
          label="Country"
          className='ttt'
          // value={name}
          // onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="Street address"
          className='tt2'
          // value={name}
          // onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="City"
          className='tt3'
          // value={name}
          // onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="State / Province"
          className='tt3'
          // value={name}
          // onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="Zip / Portal"
          className='tt3'
          // value={name}
          // onChange={handleChange}
        />
        <Button variant="contained" className='buttonss'  type="button" onClick={handleClick}> Next </Button>
      </div>
    </>
  )
}

export default Home