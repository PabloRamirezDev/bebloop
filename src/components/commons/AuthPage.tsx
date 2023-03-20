import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { PropsWithChildren, useContext, useEffect } from 'react';

const AuthPage: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const user = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  });

  if (!user) return null;

  return <>{children}</>;
};

export default AuthPage;
