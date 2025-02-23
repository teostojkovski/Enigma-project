import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div className='text-left'>
        <Card sx={{width:340}}>
            <CardMedia
            sx={{height:345}} 
            image='https://cdn.pixabay.com/photo/2022/11/09/13/58/cheeseburger-7580676_960_720.jpg'/>
            <CardContent>
                <Typography variant='h5'>
                    Burger Art
                </Typography>
                <Typography className='text-gray-400 pt-2' variant='body2'>
                    50% off on all burgers
                </Typography>
                <div className='py-2 space-y-2 mt-6'>
                    <p>{"Skopje, Macedonia"}</p>
                    <p className='text-sm text-blue-500'>February 10, 2025 10:00</p>
                    <p className='text-sm text-red-500'>February 15, 2025 22:00</p>
                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
