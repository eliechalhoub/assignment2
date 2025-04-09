import Avatar from "../../atoms/Avatar";
import UserDetails from "../../molecules/UserDetails/UserDetails";
import ButtonGroup from "../../molecules/ButtonGroup/ButtonGroup";

const UserCard = ({ user }: { user: any }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col text-center space-y-2">
      <Avatar initials={user.initials} />
      <UserDetails
        name={user.name}
        email={user.email}
        status={user.status}
        dob={user.dob}
      />
      <ButtonGroup />
    </div>
  );
};

export default UserCard;
