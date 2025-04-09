const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col text-center space-y-2">
      {/* Centered Initials */}
      <div className="bg-primary text-white w-14 h-14 flex items-center justify-center rounded-full text-lg font-bold mx-auto">
        {user.initials}
      </div>
      <h2 className="text-black text-lg font-semibold text-left w-full">{user.name}</h2>
      <p className="text-gray-600 text-sm text-left w-full">Email: {user.email}</p>
      <p className="text-gray-500 text-sm text-left w-full">Status: {user.status}</p>
      <p className="text-gray-500 text-sm text-left w-full">Date of Birth: {user.dob}</p>
      <div className="flex space-x-2 pt-2 ml-auto">
        <button className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-[#273fa3] transition cursor-pointer">
          Edit
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
