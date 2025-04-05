const SearchBar = () => {
  return (
    <div className="px-4 py-3">
      <input
        type="text"
        placeholder="Search users..."
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3251D0] placeholder-gray-500 text-black"
      />
    </div>
  );
};

export default SearchBar;
