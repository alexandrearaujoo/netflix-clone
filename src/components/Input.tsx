import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, label, type, ...rest },
  ref
) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        ref={ref}
        {...rest}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export const Input = forwardRef(InputDefault);
