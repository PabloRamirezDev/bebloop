import { User } from '@/types/user';
import { NextApiHandler } from 'next';

const loginHandler: NextApiHandler<User> = (req, res) => {
  res.json({ name: 'John Doe' })
}

export default loginHandler