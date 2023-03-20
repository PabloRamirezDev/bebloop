import { FC, HTMLInputTypeAttribute, RefObject, useRef, useState } from 'react';

interface Props {
  label: string;
  type?: HTMLInputTypeAttribute;
  inputRef?: RefObject<HTMLInputElement>;
  onEnter?: Function;
}

const LoginFormInput: FC<Props> = (props) => {
  const { label, type = 'text', inputRef, onEnter } = props;

  const [isFocused, setFocused] = useState(false);

  return (
    <div className="my-3 w-full">
      <label className="flex-col cursor-pointer">
        <p className="text-right pr-5 duration-100">{label}</p>
        <input
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onEnter?.();
            }
          }}
          className="border-green-300 border-2 outline-none w-full mt-5 py-3 px-6 rounded-full"
          ref={inputRef}
        />
      </label>
    </div>
  );
};

export default LoginFormInput;
