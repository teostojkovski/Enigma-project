import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = ({ user }) => {
  const handleLogout=()=>{

  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center itemse-center text-center'>
      <div>
        <AccountCircleIcon sx={{fontSize:"9rem"}}/>
        <h1 className='py-5 text-2xl font-semibold'>Teo Stojkovski</h1>
        <p>Email: teo.stojkovski@gmail.com</p>
        <Button variant='contained' onClick={handleLogout} sx={{margin:"2rem 0rem"}}>Log out</Button>
      </div>      
    </div>
  )
}

export default UserProfile