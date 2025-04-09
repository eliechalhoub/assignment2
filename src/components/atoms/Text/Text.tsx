type TextProps = {
    content: string;
    className?: string;
  };
  
  const Text = ({ content, className }: TextProps) => (
    <p className={`text-sm ${className}`}>{content}</p>
  );
  
  export default Text;
  