import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6 text-center mt-20">
      <h2 className="text-2xl mb-4">Bem-vindo, {user?.name}!</h2>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
