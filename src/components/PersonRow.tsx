import React, { useState } from 'react';
import '../App.css';
import { PersonRowProps } from '../types'



export const PersonRow = ({person, deletePerson, editPerson}: PersonRowProps): JSX.Element => {
  // If true, persons info can be edited
  const [editMode, setEditMode] = useState(false);
  // State of persons info
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);
  const [age, setAge] = useState(person.age);

  // Sending edited info to App component
  const submitChanges = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    editPerson({firstName, e, lastName, age, id});
    setEditMode(false);
  }

  const id = person.id;
  if(editMode) {
    return (
      <tr>
      <td><input required type="text" name="firstname"
               value={firstName} onChange={(e) => setFirstName(e.target.value)}></input></td>
      <td><input required type="text" name="lastname"
               value={lastName} onChange={(e) => setLastName(e.target.value)}></input></td>
      <td><input required type="number" pattern="[0-9]*" name="age" min={0} max={130}
               value={age} onChange={(e) => setAge(e.target.value)}></input></td>
      <td>
        <button id='confirm-button' onClick={(e) => submitChanges(e)}>Confirm</button>
        <button id='discard-button' onClick={() => setEditMode(false)}>Discard</button>
      </td>
    </tr>
    )
  }
  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.age}</td>
      <td>
        <button id='edit-button' onClick={() => setEditMode(!editMode)}>Edit</button>
        <button id='delete-button' onClick={(e) => deletePerson({id, e})}>Delete</button>
      </td>
    </tr>
  )
}