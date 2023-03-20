import { User } from '@/types/user';
import { createContext } from 'react';

const AuthContext = createContext<User | null>(null);

export default AuthContext;
