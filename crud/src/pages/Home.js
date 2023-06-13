import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../App.css'
import { addCard, deleteCard, updateCard } from '../features/Cards'
import { Link } from 'react-router-dom';
import CardCreator from './CardCreator';
import { carMakesData, carModelsData } from '../DummyData';

export default function Home() {
  const homeData = useSelector((state) => state.cards.value);
  const [update, setUpdate] = React.useState(false);
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [registrationNumber, setRegistrationNumber] = React.useState('');
  const [cardId, setCardId] = React.useState(null);
  const dispatch = useDispatch();

  const handleUpdate = (card) => {
    setCardId(card.id);
    setMake(card.make);
    setModel(card.model);
    setRegistrationNumber(card.registrationNumber);
    setUpdate(true);
  };

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

  const mapData = homeData.map((car) => (
    <div className='CarDiv' key={car.key}>
      {update && car.id === cardId ? (
        <>
          <label htmlFor="cars" className='labelCar'>Choose a car:</label>
  
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
          <input
            className='registrationNumber'
            value={registrationNumber}
            placeholder='Reg No.'
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        
        <button className='saveBtn' onClick={handleSave}>
          Save
        </button>
    
        </>
      ) : (
        <>
        <h3 className='CarMake'>{car.make}</h3>
       
      <span className='CarModel'>{car.model}</span>
      <span className='CarReg'>{car.registrationNumber}</span>
      
        </>
      )}
      <div className='btnDiv'>
     {!update &&   <button
          className='updateBtn'
          onClick={() => handleUpdate(car)}
          disabled={update && car.id !== cardId}
        >
          Update
        </button>}
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