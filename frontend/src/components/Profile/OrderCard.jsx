import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'> 
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg" alt=""/>
            <div>
                <p>Napolitana</p>
                <p>$100</p>
            </div>
        </div>
        <div>
            <Button  className='cursor-not-allowed'>Completed</Button>
        </div>
    </Card>
  )
}
