import React from 'react'
import { FormControlLabel ,Checkbox ,FormGroup ,Button } from '@mui/material';
import { useHistory } from "react-router-dom";

function Page() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  function handleClicks() {
    history.push("/pages");
  }
  return (
   <>
   <div className="content1">
     <h1 className='lov'>Additional info</h1>
     <FormGroup >

     <h1>By Email</h1>
     <div className="c">
     <FormControlLabel control={<Checkbox   />} label="COMMENTS" />
     <div className='oo'>
       
       <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</p>
     </div>
     </div>
     <div className="c">
     <FormControlLabel control={<Checkbox   />} label="CANDIDATES" />
     <div className='oo'>
       
       <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nesciunt!</p>
     </div>
     </div>
     <div className="c">
     <FormControlLabel control={<Checkbox   />} label="OFFERS" />
     <div className='oo'>
       
       <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing.</p>
     </div>
     </div>
     </FormGroup>
     <div className="cont2">
       <h1>Push Notifications</h1>
       <h5>These are delivered via sms to your mobile</h5>
       <FormGroup>

       <FormControlLabel control={<Checkbox   />} label="Everything" />
       <FormControlLabel control={<Checkbox   />} label="Same as email" />
       <FormControlLabel control={<Checkbox   />} label="No push notification" />
       </FormGroup>
       <div className="b">

       <Button variant="contained" className='but'   type="button" onClick={handleClick}> Back </Button>
       <Button variant="contained" className='but1'   type="button" onClick={handleClicks}> Next </Button>
       </div>
     </div>
   </div>
   </>
  )
}

export default Page