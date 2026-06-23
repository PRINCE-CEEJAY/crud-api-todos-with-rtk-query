import { useState } from 'react';
import { PlusCircleIcon } from 'lucide-react';
import { useAddTodosMutation } from '../../app/services/apiSlice';
import type { TodosType } from '../../types';

export default function AddTodos({ editing }: { editing: TodosType }) {
  const [todoInput, setTodoInput] = useState('');

  const [addTodo, { status }] = useAddTodosMutation();

  async function handleAddTodo() {
    const newTodo = {
      todo: todoInput.trim(),
      completed: false,
      userId: Math.round(Math.random() * 100 + 1),
    };
    try {
      console.log(newTodo);
      addTodo(newTodo);
      console.log(status);
    } catch (error) {
      console.log('Error saving todo', error);
    } finally {
      setTodoInput('');
    }
  }

  return (
    <div className='max-w-md'>
      <div className='flex items-center w-full '>
        <input
          placeholder='Enter your todo'
          className='border-2 rounded-lg p-2 flex-1'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          className='cursor-pointer p-2'
          onClick={handleAddTodo}
        >
          {editing ? 'Save' : <PlusCircleIcon size={35} />}
        </button>
      </div>
    </div>
  );
}
