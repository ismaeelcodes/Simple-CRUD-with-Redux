import React from 'react'
import { useNavigate } from 'react-router-dom'
import { carMakesData, carModelsData } from '../DummyData'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../features/Cards'
export default function CardCreator() {
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
            <label htmlFor="cars">Choose a car:</label>
  
            <select
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
              className="Inp"
              placeholder="Registration Number"
              onChange={(event) => {
                setRegNo(event.target.value);
              }}
            />
          </div>
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