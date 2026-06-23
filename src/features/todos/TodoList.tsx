import { useGetTodosQuery } from '../../app/services/apiSlice';
import TodoRow from './TodoRow';

export default function TodoList() {
  const { data: response } = useGetTodosQuery();

  console.log(response?.todos);
  return (
    <div className='container'>
      {response?.todos.map((todo) => (
        <TodoRow
          key={todo.id}
          todo={todo}
        />
      ))}
      <h1>List of todos</h1>
    </div>
  );
}
