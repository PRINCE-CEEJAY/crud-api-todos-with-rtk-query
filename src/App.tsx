import AddTodos from './features/todos/AddTodos';
import TodoList from './features/todos/TodoList';

export default function App() {
  return (
    <div className='container min-h-screen'>
      <h1>Homepage</h1>
      <AddTodos />
      <TodoList />
    </div>
  );
}
