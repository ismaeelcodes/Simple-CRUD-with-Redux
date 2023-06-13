import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../App.css'
import { addCard, deleteCard, updateCard } from '../features/Cards'
import { Link } from 'react-router-dom';
import CardCreator from './CardCreator';
import { carMakesData, carModelsData } from '../DummyData';

export default function Home() {
  // Initializing the state in our card feature, update boolean, information about the car and dispatch function.
  const homeData = useSelector((state) => state.cards.value);
  const [update, setUpdate] = React.useState(false);
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [registrationNumber, setRegistrationNumber] = React.useState('');
  const [cardId, setCardId] = React.useState(null);
  const dispatch = useDispatch();


  // Takes data from the card which is being updated and sets the states according to their information
  const handleUpdate = (card) => {
    setCardId(card.id);
    setMake(card.make);
    setModel(card.model);
    setRegistrationNumber(card.registrationNumber);
    setUpdate(true);
  };


  // saves our updated-card by calling our UpdateCard reducer in Cards.js and sends it data, then resets our local states.
  const handleSave = () => {
    dispatch(
      updateCard({
        id: cardId,
        make,
        model,
        registrationNumber,
      })
    );
    setUpdate(false);
    setMake('');
    setModel('');
    setRegistrationNumber('');
    setCardId(null);
  };

  // Maps over our Dummy Data and presents them in card and also displays the Update Inputs if Update state is true
  const mapData = homeData.map((car) => (
    <div className='CarDiv' key={car.key}>
      {update && car.id === cardId ? (
        <>
          <label htmlFor="cars" className='labelCar'>Choose a car:</label>
  
  {/* Sets the car make */}
  <select
    className='carMake'
    value={make}
    onChange={(event) => {
      setMake(event.target.value); // Update the make state
      setModel(''); // Reset the model state when make changes
    }}
  >
    {Object.keys(carModelsData).map((car) => (
      <option key={car} value={car}>
        {car}
      </option>
    ))}
  </select>

  {/* Sets the car model */}
  <select
              className='carModel'
              value={model}
              onChange={(event) => {
                setModel(event.target.value); // Update the model state
              }}
            >
              {carModelsData[make]?.map((car) => (
                <option key={car} value={car}>
                  {car}
                </option>
              ))}
            </select>

            {/* Reg No Text Field */}
          <input
            className='registrationNumber'
            value={registrationNumber}
            placeholder='Reg No.'
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        
        {/* Save button */}
        <button className='saveBtn' onClick={handleSave}>
          Save
        </button>
    
        </>
      ) : (
        <>
        {/* if No Update is happening, displays our normal cards */}
        <h3 className='CarMake'>{car.make}</h3>
       
      <span className='CarModel'>{car.model}</span>
      <span className='CarReg'>{car.registrationNumber}</span>
      
        </>
      )}
      <div className='btnDiv'>
        {/* Update button which shows if Update is false and gets disabled when Update is true */}
     {!update &&   <button
          className='updateBtn'
          onClick={() => handleUpdate(car)}
          disabled={update && car.id !== cardId}
        >
          Update
        </button>}
        {/* Delete Button which sends the id of the card to be deleted to the deleteCard reducer function */}
        <button
          className='deleteBtn'
          onClick={() => {
            dispatch(
              deleteCard({
                id: car.id,
              })
            )
            setUpdate(false)
          }
          }
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className='HomeContainer'>
      <Link to='/CardCreator'>
        <button className='AddBtn'>Add a Card</button>{' '}
      </Link>
      {mapData}
      
    </div>
  );
}