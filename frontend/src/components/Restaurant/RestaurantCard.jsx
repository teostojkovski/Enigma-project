import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToFavourites } from '../State/Authentication/Action';
import { isFavourited } from '../Config/logic';

const RestaurantCard = ({item}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const auth=useSelector((store)=>store.auth)

  const handleAddToFavourites=()=>{
    dispatch(addToFavourites(jwt, item.id))
  }

  const handleNavigateRestaurant=()=>{
      navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
  }
  return (
    <Card className='w-[18rem] cursor-pointer'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
          <img onClick={handleNavigateRestaurant} className='w-full h-[10rem rounded-t-md object-cover' src={item.images[2]} alt="" />
          <Chip 
          size="small" 
          className="absolute top-2 left-2"
          color={item.open?"success":"error"} 
          label={item.open?"open":"closed"} />
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
          <div className='space-y-1'>
            <p onClick={handleNavigateRestaurant} className="font-semibold text-lg text-left">{item.name}</p>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
          <div>
            <IconButton onClick={handleAddToFavourites}>
              {isFavourited(auth.favourites, item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
          </div>
        </div>
    </Card>
  )
}

export default RestaurantCard