import { type Todo } from '../types/todo';
import { ListView, type ListItem } from './ListView';

interface MobileTodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export function MobileTodoList({ todos, onToggle, onEdit, onDelete }: MobileTodoListProps) {
  const todoItems: ListItem<Todo>[] = todos.map(todo => ({
    id: todo.id,
    data: todo,
  }));

  const handleItemClick = (item: ListItem<Todo>) => {
    onToggle(item.id);
  };

  const handleItemLongPress = (item: ListItem<Todo>) => {
    onEdit(item.data);
  };

  const renderTodoItem = (item: ListItem<Todo>) => {
    const todo = item.data;
    
    return (
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <div className="flex-shrink-0 pt-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className={`
                font-medium text-gray-900 break-words
                ${todo.completed ? 'line-through text-gray-500' : ''}
              `}
            >
              {todo.title}
            </h3>
            
            {todo.description && (
              <p
                className={`
                  mt-1 text-sm break-words
                  ${todo.completed ? 'text-gray-400' : 'text-gray-600'}
                `}
              >
                {todo.description}
              </p>
            )}
            
            <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
              <span>{todo.updatedAt.toLocaleDateString()}</span>
              {todo.completed && (
                <span className="inline-flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Completed
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(todo);
              }}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium px-2 py-1 rounded hover:bg-blue-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(todo.id);
              }}
              className="text-red-600 hover:text-red-800 text-sm font-medium px-2 py-1 rounded hover:bg-red-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const emptyState = (
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
        <svg
          className="w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-gray-500 text-lg font-medium">No todos yet</p>
        <p className="text-gray-400 text-sm mt-1">Tap the add button to create your first todo</p>
      </div>
    </div>
  );

  return (
    <ListView
      items={todoItems}
      renderItem={renderTodoItem}
      emptyState={emptyState}
      onItemClick={handleItemClick}
      onItemLongPress={handleItemLongPress}
      itemClassName="cursor-pointer"
    />
  );
}
