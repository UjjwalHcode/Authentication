import { useNavigate } from 'react-router-dom';
import { clearToken } from '../auth';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to your Dashboard 🎉</h2>
        <p className="text-gray-600 mb-8">
          You're logged in! Explore and customize your dashboard.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}
