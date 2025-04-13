import { useThemeStore } from "../../../store/ThemeStore";
import Text from "../../atoms/Text";

const UserDetails = ({
  name,
  email,
  status,
  dob,
}: {
  name: string;
  email: string;
  status: string;
  dob: string;
}) => {
  const { darkMode } = useThemeStore();

  return (
    <>
      <h2 className={`${darkMode ? "text-white" : "text-black"} text-lg font-semibold text-left w-full`}>
        {name}
      </h2>
      <Text
        content={`Email: ${email}`}
        className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-left w-full`}
      />
      <Text
        content={`Status: ${status}`}
        className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-left w-full`}
      />
      <Text
        content={`Date of Birth: ${dob}`}
        className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-left w-full`}
      />
    </>
  );
};

export default UserDetails;
