import Text from "../../atoms/Text";

const UserDetails = ({ name, email, status, dob }: {
  name: string;
  email: string;
  status: string;
  dob: string;
}) => (
  <>
    <h2 className="text-black text-lg font-semibold text-left w-full">{name}</h2>
    <Text content={`Email: ${email}`} className="text-gray-600 text-left w-full" />
    <Text content={`Status: ${status}`} className="text-gray-500 text-left w-full" />
    <Text content={`Date of Birth: ${dob}`} className="text-gray-500 text-left w-full" />
  </>
);

export default UserDetails;
