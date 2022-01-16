import classes from "./Todos.module.css";

import Todo from "../models/todo";
import ListItem from "./ListItem";

// React.FC is already generic so the <> is what we us to state the type inside
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <ListItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
