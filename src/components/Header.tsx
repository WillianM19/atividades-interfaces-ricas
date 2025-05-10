import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 px-24 flex justify-between items-center border-b border-gray-300">
      <h1 className="text-lg font-bold">Atividade Context API</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Tema: {theme === 'light' ? 'Claro' : 'Escuro'}
      </button>
    </header>
  );
};

export default Header;
