import LoginPage from '@/components/login';
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export default function Login() {
  const user = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  });

  if (user) return null;

  return <LoginPage />;
}
