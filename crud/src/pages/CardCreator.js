import React from 'react'
import { useNavigate } from 'react-router-dom'
import { carModelsData } from '../DummyData'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../features/Cards'
export default function CardCreator() {
    {/* Initializing Dispatch, State Data, and our local states */}
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.cards.value);
    const [model, setModel] = React.useState('Civic');
    const [make, setMake] = React.useState('Honda');
    const [regNo, setRegNo] = React.useState('');
    const navigate = useNavigate();
  
    return (
      <div className="Container">
        <div className="loginDiv">
          <h2>Create your Card</h2>
          <div className="InpDiv">
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
  
              {/* Sets the car Model */}
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
  
           {/* Input Reg Field */}
            <input
              className="Inp"
              placeholder="Registration Number"
              onChange={(event) => {
                setRegNo(event.target.value);
              }}
            />
          </div>

          {/* Add Card button which dispatches the addCard Reducer in our state and sends makes a new object consisting of data to be added, then goes back to home */}
          <button
            className="loginBtn"
            onClick={() => {
              dispatch(
                addCard({
                  id: homeData[homeData.length - 1].id + 1,
                  make: make,
                  model: model,
                  registrationNumber: regNo,
                  color: 'black',
                })
              );
              navigate('/Home');
            }}
          >
            Create
          </button>
        </div>
      </div>
    );
  }