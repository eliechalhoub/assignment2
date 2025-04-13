import { useThemeStore } from "../../../store/ThemeStore";
import Input from "../../atoms/Input";
import { ChangeEvent } from "react";

type Props = {
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const { darkMode } = useThemeStore();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="px-4 py-3">
      <Input
        type="search"
        placeholder="Search users..."
        className={`mt-5 
          ${darkMode 
            ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400" 
            : "bg-white text-black border-gray-300 placeholder-gray-500"}
        `}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
