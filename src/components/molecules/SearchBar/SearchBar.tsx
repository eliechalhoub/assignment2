import Input from "../../atoms/Input";
import { ChangeEvent } from "react";

type Props = {
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="px-4 py-3">
      <Input
        type="search"
        placeholder="Search users..."
        className="mt-5"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
