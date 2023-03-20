import Head from 'next/head';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Log In | BeBloop</title>
      </Head>
      <main className="w-screen h-screen bg-stone-100 flex flex-col justify-center items-center">
        <div className="w-6/12 md:w-4/12 items-center flex flex-col">
          <h1 className='text-center m-5 font-medium text-xl w-8/12'>Log in to start Beeping and Blooping!</h1>
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
