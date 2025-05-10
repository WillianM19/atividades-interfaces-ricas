import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

type FormData = {
  name: string;
  password: string;
};

const LoginForm = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    login(data.name, data.password);
  };

  const isDark = theme === 'dark';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`p-6 space-y-4 max-w-sm mx-auto mt-20 ${
        isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
      } shadow-lg rounded-2xl transition-colors duration-300`}
    >
      <div>
        <input
          type="text"
          placeholder="Seu nome"
          {...register('name', { required: 'O nome é obrigatório' })}
          className={`w-full p-2 border rounded ${
            isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
          } border-gray-300 ${isDark ? 'dark:border-gray-600' : ''} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Sua senha"
          {...register('password', {
            required: 'A senha é obrigatória',
            minLength: { value: 4, message: 'Mínimo 4 caracteres' },
          })}
          className={`w-full p-2 border rounded ${
            isDark ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
          } border-gray-300 ${isDark ? 'dark:border-gray-600' : ''} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
