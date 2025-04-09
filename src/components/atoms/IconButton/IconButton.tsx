import { Moon } from "lucide-react";

type IconButtonProps = {
  onClick: () => void;
};

const IconButton = ({ onClick }: IconButtonProps) => (
  <button
    onClick={onClick}
    className="bg-transparent text-white mx-4 my-2 rounded-md hover:transition cursor-pointer"
  >
    <Moon size={20} />
  </button>
);

export default IconButton;
