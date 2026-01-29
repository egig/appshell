import type { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onEdit, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No todos yet</p>
        <p className="text-gray-400 text-sm mt-2">Add your first todo to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <h3
                className={`font-medium text-gray-900 ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.title}
              </h3>
              {todo.description && (
                <p
                  className={`mt-1 text-sm ${
                    todo.completed ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {todo.description}
                </p>
              )}
              <p className="mt-2 text-xs text-gray-400">
                {todo.updatedAt.toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(todo)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
