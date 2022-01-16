import classes from "./TodoItem.module.css";

const ListItem: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default ListItem;
