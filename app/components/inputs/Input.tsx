"use client";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  dark?: boolean,
  placeholder?: string,
};

const Input = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  dark,
  placeholder
}: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-white
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, { required })}
          className={clsx(
            `
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-sky-500
            placeholder:font-light
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6`,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default",
            dark && 'bg-gradient-to-br from-gray-900 via-black to-blue-900 via-30% text-cyan-400'
          )}
        />
      </div>
    </div>
  );
};

export default Input;
