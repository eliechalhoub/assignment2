import UserCard from "./UserCard";

const users = [
  { initials: "JD", name: "John Doe", email: "john.doe@example.com", status: "active", dob: "1990-05-15" },
  { initials: "JS", name: "Jane Smith", email: "jane.smith@example.com", status: "locked", dob: "1988-10-22" },
  { initials: "AJ", name: "Alice Johnson", email: "alice.johnson@example.com", status: "active", dob: "1995-02-10" },
  { initials: "CB", name: "Charlie Brown", email: "charlie.brown@example.com", status: "active", dob: "1992-11-30" },
  { initials: "DL", name: "David Lee", email: "david.lee@example.com", status: "active", dob: "1987-07-14" },
  { initials: "E", name: "Eve", email: "eve@example.com", status: "active", dob: "1993-09-21" },
  { initials: "FW", name: "Frank White", email: "frank.white@example.com", status: "active", dob: "1994-01-25" },
  { initials: "GB", name: "Grace Black", email: "grace.black@example.com", status: "locked", dob: "1985-03-17" },
  { initials: "H", name: "Hannah", email: "hannah@example.com", status: "active", dob: "1996-12-03" },
];

const UserGrid = () => {
  return (
    <div className="px-4 pb-6 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
