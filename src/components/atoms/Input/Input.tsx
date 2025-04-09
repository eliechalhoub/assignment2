import { InputProps } from "./Input.type";

const Input = ({ type, placeholder, className, value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 text-black ${className}`}
    />
  );
};

export default Input;
