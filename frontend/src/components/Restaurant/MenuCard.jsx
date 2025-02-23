import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo=[
  {
    category:"Nuts & seeds",
    ingredients:["Cashews"]
  },
  {
    category:"Protein",
    ingredients:["Ham", "Bacon"]
  },
]

const MenuCard = () => {
  const handleChechBoxChange=(value)=>{
    console.log("value")
  }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
              <img  className='w-[7rem] h-[7rem] object-cover' src="https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_960_720.jpg" alt="" />
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>Capricciosa Pizza</p>
                <p>300 денари</p>
                <p className='text-gray-400'>A delightful Italian classic, crafted to please the most refined palates. Built on a base of perfectly baked, golden dough, it features a rich layer of tangy tomato sauce and creamy mozzarella cheese.</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
              {demo.map((item)=>(
                  <div>
                    <p>{item.category}</p>
                    <FormGroup>
                      {item.ingredients.map((item)=> (
                        <FormControlLabel control={<Checkbox onChange={()=>handleChechBoxChange(item)}/>} label={item} />
                      ))}
                    </FormGroup>
                  </div>
                  
                ))}
            </div>
            <div className='pt-5'>
              <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard