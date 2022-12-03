
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { useDispatch } from "react-redux";
import styles from './index.module.css';
import { sortTodos } from "../../store/actions/creators/todo";

export const TodoList = () => {
  const dispatch = useDispatch();
  let todos = useSelector(todosSelector);
 

  const sortTodoItems = (sortMethod) => {
    const sortedIds = sortMethod ?
     [...todos.sort((a,b)=>a.completed < b.completed ? 1 : -1)].map(item=>item.id) :
     [...todos.sort((a,b)=>a.completed > b.completed ? 1 : -1)].map(item=>item.id) 
    dispatch(sortTodos(sortedIds))
  }
  return (
    <><div className={styles.searchMenu}>Сортировка, сначала: <button onClick={()=>sortTodoItems('done')}>Выполненные</button><button onClick={()=>sortTodoItems()}>Не выполненные</button></div>
    <ul className={styles.list}>
    {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul></>
  );
};
