import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../../../store/ThemeStore";

type IconButtonProps = {
  onClick: () => void;
};

const IconButton = ({ onClick }: IconButtonProps) => {
  const { darkMode } = useThemeStore();

  return (
    <button
      onClick={onClick}
      className="bg-transparent text-white mx-4 my-2 rounded-md hover:transition cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default IconButton;
