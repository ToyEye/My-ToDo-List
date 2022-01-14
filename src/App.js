import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title } from './components/Components';
import ListPaint from './components/List/List';
import Form from './components/Form/Form';

export default function App() {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    const saveToDos = JSON.parse(localStorage.getItem('toDoList'));
    if (saveToDos) {
      setToDos(saveToDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = value => {
    if (value === '') {
      return;
    }
    const newToDo = {
      id: nanoid(),
      toDo: value,
    };
    return setToDos(toDos => [newToDo, ...toDos]);
  };

  const deleteToDo = value => {
    const newArray = toDos.filter(todo => todo.id !== value);
    return setToDos(newArray);
  };

  return (
    <Container>
      <Title>ToDo list</Title>
      <Form onSubmit={addToDo} />
      <ListPaint onPaint={toDos} onDelete={deleteToDo} />
    </Container>
  );
}
