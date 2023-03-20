import useFocus from '@/hooks/useFocus';
import { FC, useRef } from 'react';
import LoginFormInput from './LoginFormInput';

const LoginForm: FC = () => {
  const [secondInputRef, focusSecondInput] = useFocus<HTMLInputElement>();
  const [submitButtonRef, focusSubmitButton] = useFocus<HTMLInputElement>();

  return (
    <form
      className="m-5 w-full flex flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <LoginFormInput label="Username or Email" onEnter={focusSecondInput} />
      <LoginFormInput
        label="Password"
        type="password"
        inputRef={secondInputRef}
        onEnter={focusSubmitButton}
      />
      <input
        type="submit"
        value="Log In"
        className="bg-orange-400 w-6/12 rounded-full mt-5 py-3 text-white font-semibold cursor-pointer hover:bg-orange-500 duration-100 outline-none focus:bg-orange-300"
        ref={submitButtonRef}
      />
    </form>
  );
};

export default LoginForm;
