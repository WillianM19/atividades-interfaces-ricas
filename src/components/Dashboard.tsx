import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme(); 
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div
        className={`${
          isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
        } shadow-xl rounded-2xl p-8 w-full max-w-md transition-colors duration-300`}
      >
        <h2
          className={`text-3xl font-semibold mb-6 text-center ${
            isDark ? 'text-gray-100' : 'text-gray-800'
          }`}
        >
          Bem-vindo, {user?.name}!
        </h2>

        <div className="text-center">
          <button
            onClick={logout}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
