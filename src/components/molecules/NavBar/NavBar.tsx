import Button from "../../atoms/Button";
import IconButton from "../../atoms/IconButton";

const NavBar = () => {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">User Management</h1>
      <div className="flex items-center space-x-3">
        <Button
          text="Create User"
          onClick={() => {}}
          className="bg-white text-primary hover:bg-gray-200 cursor-pointer"
        />
        <Button
          text="Logout"
          onClick={() => {}}
          className="bg-red-500 text-white hover:bg-red-600 cursor-pointer"
        />
        <IconButton onClick={() => {}} />
      </div>
    </nav>
  );
};

export default NavBar;
