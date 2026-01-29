import { type ReactNode } from 'react';

export interface ListItem<T> {
  id: string;
  data: T;
}

export interface ListViewProps<T> {
  items: ListItem<T>[];
  renderItem: (item: ListItem<T>, index: number) => ReactNode;
  emptyState?: ReactNode;
  loading?: boolean;
  loadingComponent?: ReactNode;
  className?: string;
  itemClassName?: string;
  onItemClick?: (item: ListItem<T>, index: number) => void;
  onItemLongPress?: (item: ListItem<T>, index: number) => void;
}

export function ListView<T>({
  items,
  renderItem,
  emptyState,
  loading = false,
  loadingComponent,
  className = '',
  itemClassName = '',
  onItemClick,
  onItemLongPress,
}: ListViewProps<T>) {
  if (loading) {
    return (
      <div className={`flex justify-center items-center py-12 ${className}`}>
        {loadingComponent || (
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm">Loading...</p>
          </div>
        )}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        {emptyState || (
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No items found</p>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`
            bg-white rounded-lg shadow-sm border border-gray-200 
            hover:shadow-md transition-all duration-200
            active:scale-98 active:shadow-sm
            ${itemClassName}
          `}
          onClick={() => onItemClick?.(item, index)}
          onTouchStart={() => {
            if (onItemLongPress) {
              const timeout = setTimeout(() => {
                onItemLongPress(item, index);
              }, 500);
              const handleTouchEnd = () => {
                clearTimeout(timeout);
                document.removeEventListener('touchend', handleTouchEnd);
              };
              document.addEventListener('touchend', handleTouchEnd);
            }
          }}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}
