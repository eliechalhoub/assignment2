type ButtonProps = {
    text: string;
    onClick: () => void;
    className: string;
  };
  
  const Button = ({ text, onClick, className }: ButtonProps) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition ${className}`}
    >
      {text}
    </button>
  );
  
  export default Button;
  