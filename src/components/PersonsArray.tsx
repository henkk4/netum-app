import React, { useState } from 'react';
import '../App.css';
import {PersonRow} from './PersonRow'
import { ArrayProps } from '../types'


// Render table of persons
export const PersonsArray = ({persons, deletePerson, editPerson}: ArrayProps): JSX.Element => {
  // Setting states for sort buttons
  const [firstSort, setFirstSort] = useState("UP")
  const [lastSort, setLastSort] = useState("UP")
  const [ageSort, setAgeSort] = useState("UP")

  // Sort by firstname
  const sortFirst = () => {
    if(firstSort == "UP") {
      persons.sort((a, b): number => {
        return a.firstName.toLowerCase() !== b.firstName.toLowerCase() ? 
          (a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1) : 0;
      });
      setFirstSort("DOWN");
    }
    else {
      persons.sort((a, b): number => {
        return a.firstName.toLowerCase() !== b.firstName.toLowerCase() ? 
          (a.firstName.toLowerCase() < b.firstName.toLowerCase() ? 1 : -1) : 0;
      });
      setFirstSort("UP");
    }
  }
  // Sort by lastname
  const sortLast = () => {
    if(lastSort == "UP") {
      persons.sort((a, b): number => {
        return a.lastName.toLowerCase() !== b.lastName.toLowerCase() ? 
          (a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1) : 0;
      });
      setLastSort("DOWN");
    }
    else {
      persons.sort((a, b): number => {
        return a.lastName.toLowerCase() !== b.lastName.toLowerCase() ? 
          (a.lastName.toLowerCase() < b.lastName.toLowerCase() ? 1 : -1) : 0;
      });
      setLastSort("UP");
    }
  }
  // Sort by age
  const sortAge = () => {
    if(ageSort == "UP") {
      persons.sort((a, b): number => {
        return a.age.toLowerCase() !== b.age.toLowerCase() ? 
          (a.age.toLowerCase() > b.age.toLowerCase() ? 1 : -1) : 0;
      });
      setAgeSort("DOWN");
    }
    else {
      persons.sort((a, b): number => {
        return a.age.toLowerCase() !== b.age.toLowerCase() ? 
          (a.age.toLowerCase() < b.age.toLowerCase() ? 1 : -1) : 0;
      });
      setAgeSort("UP");
    }
  }
  if (persons.length > 0) {
    return (
      <div>
        <h3>Persons</h3>
        <table id='persons-table'>
          <thead>
            <tr>
              <th>First Name <button id='sort-button' onClick={sortFirst}>{firstSort}</button></th>
              <th>Last Name <button id='sort-button' onClick={sortLast}>{lastSort}</button></th>
              <th>Age <button id='sort-button' onClick={sortAge}>{ageSort}</button></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons.map(person => 
              <PersonRow editPerson={editPerson} deletePerson={deletePerson} key={person.id} person={person}></PersonRow>)}
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <h3>No persons yet :(</h3>
      <p>Add persons with the form above</p>
    </div>
  )
}