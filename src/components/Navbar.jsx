const Navbar = () => {
  return (
    <nav className="bg-[#3251D0] text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">User Management</h1>
      <div className="flex items-center space-x-3">
        <button className="!bg-white text-[#3251D0] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
          Create User
        </button>
        <button className="!bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition">
          Logout
        </button>
        <button className="!bg-transparent text-white px-4 py-2 rounded-md hover:bg-[#2a45b5] transition">
          🌙
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
