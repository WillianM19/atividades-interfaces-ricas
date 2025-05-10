import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { user } = useAuth();

  return (
    <div>
      <Header />
      {user ? <Dashboard /> : <LoginForm />}
    </div>
  );
};

export default App;
