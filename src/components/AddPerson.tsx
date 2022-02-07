import React, { useState } from 'react';
import '../App.css';
import { AddProps } from '../types'


export const AddPerson = ({ addPerson }: AddProps): JSX.Element => {
  // State of new persons info
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  // Sending info of new person to App component
  const submitPerson = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addPerson({firstName, lastName, e, age});
    setFirstName('');
    setLastName('');
    setAge('');
  }

  return (
    <div id='person-form'>
      <h3>Add New Person:</h3>
      <form onSubmit={submitPerson}>
        <div id="firstname">
          <label>First Name: 
            <input required type="text" name="firstname" placeholder='Type persons first name'
               value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
          </label>
        </div>
        <div id="lastname">
          <label>Last Name: 
            <input required type="text" name="lastname" placeholder='Type persons last name'
               value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
          </label>
        </div>
        <div id="age">
          <label>Age: 
            <input required type="number" pattern="[0-9]*" name="age" min={0} max={130}
               value={age} onChange={(e) => setAge(e.target.value)}></input>
          </label>
        </div>
        <div>
          <button type="submit" id="submit-button">Add</button>
        </div>
      </form>
    </div>
  )
}