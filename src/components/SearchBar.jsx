const SearchBar = () => {
  return (
    <div className="px-4 py-3">
      <input
        type="search"
        placeholder="Search users..."
        className="px-2 py-1 mt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 text-black"
      />
    </div>
  );
};

export default SearchBar;
