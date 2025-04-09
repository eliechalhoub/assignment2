import Button from "../../atoms/Button";

const ButtonGroup = () => (
  <div className="flex space-x-2 pt-2 ml-auto">
    <Button
      text="Edit"
      onClick={() => {}}
      className="bg-primary text-white hover:bg-[#273fa3] cursor-pointer"
    />
    <Button
      text="Delete"
      onClick={() => {}}
      className="bg-red-500 text-white hover:bg-red-600 cursor-pointer"
    />
  </div>
);

export default ButtonGroup;
