import Avatar from "../../atoms/Avatar";
import UserDetails from "../../molecules/UserDetails/UserDetails";
import ButtonGroup from "../../molecules/ButtonGroup/ButtonGroup";
import { useThemeStore } from "../../../store/ThemeStore";

const UserCard = ({ user }: { user: any }) => {
  const { darkMode } = useThemeStore();

  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} shadow-md rounded-xl p-4 flex flex-col text-center space-y-2`}>
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
