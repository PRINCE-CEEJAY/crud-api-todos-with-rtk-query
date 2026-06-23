import { PlusCircleIcon } from 'lucide-react';

export default function AddTodos() {
  return (
    <div className='max-w-md'>
      <div className='flex items-center w-full '>
        <input
          placeholder='Enter your todo'
          className='border-2 rounded-lg p-2 flex-1'
        />
        <button>
          <PlusCircleIcon size={35} />
        </button>
      </div>
    </div>
  );
}
