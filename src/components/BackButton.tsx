import { useNavigate } from 'react-router';
import { useNavigation } from '../contexts/NavigationContext';

interface BackButtonProps {
  show: boolean;
}

export function BackButton({ show }: BackButtonProps) {
  const navigate = useNavigate();
  const { setNavType } = useNavigation();

  const handleBack = () => {
    setNavType('back');
    navigate(-1);
  };

  if (!show) return null;

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full shadow-lg transition-opacity no-select"
      style={{
        top: 'max(1rem, env(safe-area-inset-top))',
      }}
      aria-label="Go back"
    >
      <svg
        className="w-6 h-6 text-gray-900 dark:text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
