import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const auth=useSelector((store)=>store.auth)
    const navigate=useNavigate()
    const handleAvatarClick=()=>{
        if(auth.user?.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/restaurant")
        }
    }
    return(
        <Box
        className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#385E3C] lg:px-20 flex justify-between'>

                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text-2xl'>
                        Enigma
                    </li>
                    <div>

                    </div>
                </div>


            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{fontSize:"1.5rem"}}/>
                    </IconButton>
                </div>

                <div className=''>
                    {auth.user ? (<Avatar onClick={handleAvatarClick} sx={{bgcolor:"white", color:pink.A400}}>{auth.user?.fullName[0].toUpperCase()}</Avatar>) :
                    (<IconButton onClick={()=>navigate("/account/login")}>
                        <Person/>
                    </IconButton>)}
                </div>

                <div>
                    <IconButton>
                        <Badge color="secondary" badgeContent={3}>
                            <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}