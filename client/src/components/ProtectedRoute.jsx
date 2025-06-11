// client/src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../auth';

export default function ProtectedRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/" replace />;
}
