import { useContext } from "react";
import classes from "./Todos.module.css";

import ListItem from "./ListItem";
import { TodosContext } from "../store/todos-context";

// React.FC is already generic so the <> is what we us to state the type inside
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
