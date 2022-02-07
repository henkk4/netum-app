import { FormEvent } from "react";

export interface Person {
  id: number;
  age: string;
  firstName: string;
  lastName: string;
}

export interface AddPersonParams {
  firstName: string;
  e: FormEvent;
  lastName: string;
  age: string;
}

export interface EditPersonParams {
  firstName: string;
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  lastName: string;
  age: string;
  id: number;
}

export interface DeletePersonParams {
  id: number;
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

export interface AddProps {
  addPerson: ({firstName, e, lastName, age}: AddPersonParams) => void; 
}

export interface ArrayProps {
  persons: Person[];
  deletePerson: ({id, e}: DeletePersonParams) => void;
  editPerson: ({firstName, e, lastName, age}: EditPersonParams) => void; 
}

export interface PersonRowProps {
  person: Person;
  deletePerson: ({id, e}: DeletePersonParams) => void;
  editPerson: ({firstName, e, lastName, age}: EditPersonParams) => void; 
}