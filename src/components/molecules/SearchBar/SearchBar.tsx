import Input from "../../atoms/Input";

const SearchBar = () => {
  return (
    <div className="px-4 py-3">
      <Input
        type="search"
        placeholder="Search users..."
        className="mt-5"
      />
    </div>
  );
};

export default SearchBar;
