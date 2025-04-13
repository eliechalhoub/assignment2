import { useEffect, useState } from "react";
import UserCard from "../UserCard";
import userData from "../../../../mock/mock/users.json"; 

type User = {
  initials: string;
  name: string;
  email: string;
  status: string;
  dob: string;
};

const UserGrid = ({ search }: { search: string }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        // Fetch delay to show loading spinner
        await new Promise((resolve) => setTimeout(resolve, 500));

        const allUsers = userData.users;

        const filteredUsers = allUsers.filter((user: any) => {
          const firstName = user.firstName || "";
          const lastName = user.lastName || "";
          const email = user.email || "";

          const fullName = [firstName, lastName].filter(Boolean).join(" ").toLowerCase();
          const keyword = search.toLowerCase();

          return (
            fullName.includes(keyword) || email.toLowerCase().includes(keyword)
          );
        });

        const mappedUsers: User[] = filteredUsers.map((user: any) => {
          const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ");
          const initials = fullName
            .split(" ")
            .map((part) => part[0])
            .join("");

          return {
            initials,
            name: fullName,
            email: user.email,
            status: user.status?.toLowerCase() || "unknown",
            dob: user.dateOfBirth,
          };
        });

        setUsers(mappedUsers);
      } catch (err) {
        console.error("Error loading users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [search]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 gap-5">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-primary border-solid"></div>
        <span className="ml-4 text-primary text-lg">Loading users...</span>
      </div>
    );
  }

  if (users.length === 0) {
    return <div className="text-center py-10 text-gray-500">No users found.</div>;
  }

  return (
    <div className="px-4 pb-6 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
