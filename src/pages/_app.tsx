import AuthContext from '@/context/AuthContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('/api/auth/login');
  //     const us = await res.json();

  //     setUser(us);
  //   })();
  // });

  return (
    <AuthContext.Provider value={user}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
