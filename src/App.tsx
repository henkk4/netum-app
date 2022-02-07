import React, { useState } from 'react';
import { AddPerson } from './components/AddPerson';
import { PersonsArray } from './components/PersonsArray';
import './App.css';
import { Person, AddPersonParams, DeletePersonParams, 
         EditPersonParams } from './types';


const App = () => {
  // All persons
  const [persons, setPersons] = useState<Person[]>([]);
  // Id of next person
  const [id, setId] = useState(1);
    
  // Adding new person
  const addPerson = ({firstName, e, lastName, age}: AddPersonParams): void => {
    e.preventDefault();
    const newPerson: Person = {
      id: id,
      age: age,
      firstName: firstName,
      lastName: lastName
    };
    setPersons(persons.concat(newPerson));
    setId(id + 1);
  }

  // Deleting one person
  const deletePerson = ({id, e}: DeletePersonParams): void => {
    e.preventDefault();
    const newPersons: Person[] = persons.filter(person => 
      person.id !== id);
    setPersons(newPersons);
  }

  // Replacing one person with edited version
  const editPerson = ({firstName, e, lastName, age, id}: EditPersonParams): void => {
    e.preventDefault();
    const newPersons: Person[] = persons;
    newPersons.map(person => {
      if(person.id == id) {
        person.firstName = firstName;
        person.lastName = lastName;
        person.age = age;
      }
    })
    setPersons(newPersons);
  }

  return (
    <div className='App'>
      <h1>Netum Persons Table</h1>
      <AddPerson addPerson={addPerson}></AddPerson>
      <PersonsArray editPerson={editPerson} deletePerson={deletePerson} 
                    persons={persons}></PersonsArray>
    </div>
  );
};

export default App;
