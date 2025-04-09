import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">User Management</h1>
      <div className="flex items-center space-x-3">
        <button className="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition cursor-pointer">
          Create User
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition cursor-pointer">
          Logout
        </button>
        <button className="bg-transparent text-white mx-4 my-2 rounded-md hover: transition cursor-pointer">
          <Moon size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
