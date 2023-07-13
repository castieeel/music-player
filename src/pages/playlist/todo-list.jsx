import { useSelector } from "react-redux";
import { filterSelector, todosSelector } from "../../store/selectors/todo";
import { Todo } from "./todo";
import { filters, filterBy } from "../../store/slices/todo";
import { useDispatch } from "react-redux";

import styles from "./index.module.css";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filteredTodo = () => {
    if (filter === filters.DONE) {
      return todos.filter((todo) => todo.completed);
    }
    if (filter === filters.ACTIVE) {
      return todos.filter((todo) => !todo.completed);
    }
    // if none of above return all todos
    return todos;
  };

  return (
    <>
      <button onClick={dispatch(filterBy(filters.ACTIVE))}>👋Active</button>
      <button onClick={dispatch(filterBy(filters.DONE))}>✅Done</button>
      <button onClick={dispatch(filterBy(filters.ALL))}>❗All</button>
      <ul className={styles.list}>
        {/* {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))} */}
        {filteredTodo().map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
