import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

type FormData = {
  name: string;
};

const LoginForm = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    login(data.name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 max-w-sm mx-auto mt-20">
      <input
        type="text"
        placeholder="Seu nome"
        {...register('name', { required: 'O nome é obrigatório' })}
        className="w-full p-2 border rounded"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
