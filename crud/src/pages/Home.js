import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../App.css'
import { addCard, deleteCard, updateCard } from '../features/Cards'
import { Link } from 'react-router-dom';

export default function Home() {
  const homeData = useSelector((state) => state.cards.value);
  const dispatch = useDispatch()

  const mapData = homeData.map((car) => {
    return(
    <div className='CarDiv' key={car.key}>
        <h3 className='CarMake'>{car.make}</h3>
        <span className='CarModel'>{car.model}</span> 
        <span className='CarReg'>{car.registrationNumber}</span>
        <div className='btnDiv'>
            <button className='updateBtn'>Update</button>
            <button className='deleteBtn' onClick={() => {
                dispatch(
                    deleteCard({
                        id: car.id
                    })
                )
            }}>Delete</button>
        </div>
    </div>
  )
})

  return (
    <div className='HomeContainer'>
        <Link to="/CardCreator"><button>Add a Card</button> </Link>
        {mapData}
    </div>
  )
}
