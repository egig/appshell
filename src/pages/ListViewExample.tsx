import { useState } from 'react';
import { ListView, type ListItem } from '../components/ListView';
import { MobileTodoList } from '../components/MobileTodoList';
import type { Todo } from '../types/todo';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
}

export function ListViewExample() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  
  // Sample data for different list types
  const [todos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Buy groceries',
      description: 'Milk, eggs, bread, and vegetables',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Call mom',
      description: 'Remember to ask about the family dinner',
      completed: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title: 'Finish project report',
      description: 'Complete the quarterly analysis and send to team',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'SJ',
      status: 'online',
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike.chen@example.com',
      avatar: 'MC',
      status: 'away',
    },
    {
      id: '3',
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      avatar: 'ED',
      status: 'offline',
    },
  ]);

  const handleToggleTodo = (id: string) => {
    console.log('Toggle todo:', id);
  };

  const handleEditTodo = (todo: Todo) => {
    console.log('Edit todo:', todo);
  };

  const handleDeleteTodo = (id: string) => {
    console.log('Delete todo:', id);
  };

  const handleUserClick = (item: ListItem<User>) => {
    setSelectedUserId(item.id);
    console.log('Selected user:', item.data);
  };

  const renderUserItem = (item: ListItem<User>) => {
    const user = item.data;
    const isSelected = selectedUserId === item.id;
    
    const statusColors = {
      online: 'bg-green-500',
      away: 'bg-yellow-500',
      offline: 'bg-gray-400',
    };

    return (
      <div className={`p-4 ${isSelected ? 'bg-blue-50 border-blue-300' : ''}`}>
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
              {user.avatar}
            </div>
            <div className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[user.status]} rounded-full border-2 border-white`}></div>
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{user.name}</h3>
            <p className="text-sm text-gray-600 truncate">{user.email}</p>
            <div className="mt-1 flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 text-xs ${user.status === 'online' ? 'text-green-600' : user.status === 'away' ? 'text-yellow-600' : 'text-gray-500'}`}>
                <div className={`w-2 h-2 ${statusColors[user.status]} rounded-full`}></div>
                {user.status}
              </span>
            </div>
          </div>

          {/* Chevron */}
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobile List View Examples</h1>
          <p className="text-gray-600">Touch-friendly list components optimized for mobile devices</p>
        </div>

        {/* Todo List Example */}
        <section>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Todo List</h2>
            <p className="text-sm text-gray-600">Tap to toggle, long press to edit. Swipe actions on mobile.</p>
          </div>
          <MobileTodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
          />
        </section>

        {/* User List Example */}
        <section>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">User List</h2>
            <p className="text-sm text-gray-600">Simple contact list with online status indicators</p>
          </div>
          <ListView
            items={users.map(user => ({ id: user.id, data: user }))}
            renderItem={renderUserItem}
            onItemClick={handleUserClick}
            itemClassName="cursor-pointer hover:border-blue-200"
          />
        </section>

        {/* Features */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Mobile Features</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Touch Optimized</h3>
                <p className="text-sm text-gray-600">Large tap targets and touch feedback</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Responsive Design</h3>
                <p className="text-sm text-gray-600">Adapts to different screen sizes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Long Press Support</h3>
                <p className="text-sm text-gray-600">Alternative interaction pattern for mobile</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Accessible</h3>
                <p className="text-sm text-gray-600">Screen reader friendly and keyboard navigable</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
