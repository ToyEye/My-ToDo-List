import { List, Item, Button } from '../Components/';

export default function ListPaint({ onPaint, onDelete }) {
  return (
    <List>
      {onPaint.map(({ toDo, id }) => (
        <Item key={id}>
          <p>{toDo}</p> <Button onClick={() => onDelete(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
}
