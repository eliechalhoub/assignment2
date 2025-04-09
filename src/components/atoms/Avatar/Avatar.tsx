type AvatarProps = {
    initials: string;
  };
  
  const Avatar = ({ initials }: AvatarProps) => (
    <div className="bg-primary text-white w-14 h-14 flex items-center justify-center rounded-full text-lg font-bold mx-auto">
      {initials}
    </div>
  );
  
  export default Avatar;
  