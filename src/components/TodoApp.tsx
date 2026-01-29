import { useState } from 'react';
import type { Todo, TodoFormData } from '../types/todo';
import { TodoList } from './TodoList';
import { TodoModal } from './TodoModal';

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Sample todo item',
      description: 'This is an example todo to get you started',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Another task',
      description: 'Click edit to modify or delete to remove',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const generateId = () => Date.now().toString();

  const handleAddTodo = () => {
    setEditingTodo(null);
    setIsModalOpen(true);
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const handleSubmitTodo = (data: TodoFormData) => {
    if (editingTodo) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editingTodo.id
            ? {
                ...todo,
                ...data,
                updatedAt: new Date(),
              }
            : todo
        )
      );
    } else {
      const newTodo: Todo = {
        id: generateId(),
        ...data,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setTodos(prev => [newTodo, ...prev]);
    }
    setEditingTodo(null);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTodo(null);
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Todo List</h1>
            <button
              onClick={handleAddTodo}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Add Todo
            </button>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Total: {totalCount}</span>
            <span>Completed: {completedCount}</span>
            <span>Remaining: {totalCount - completedCount}</span>
          </div>
        </div>

        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />

        <TodoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitTodo}
          editingTodo={editingTodo}
        />
      </div>
    </div>
  );
}
