import AuthPage from '@/components/commons/AuthPage';
import AuthContext from '@/context/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const user = useContext(AuthContext);

  return <AuthPage>Hello, {user?.name}!</AuthPage>;
}
