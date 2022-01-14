import { useState } from 'react';
import { Input } from '../Components/Components.styled';

export default function Form({ onSubmit }) {
  const [value, setValue] = useState('');
  const submitHandler = evt => {
    evt.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        value={value}
        onChange={evt => setValue(evt.target.value)}
        placeholder="Enter To Do"
      />
    </form>
  );
}
