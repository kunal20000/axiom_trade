interface SmallInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;    
    placeholder?: string;
    className?: string;
    type?: string;
  }
  
  const SmallInput = ({
    value = "",
    onChange,
    placeholder = "0.0",
    type = "text",
    className = "",
  }: SmallInputProps) => {
    return (
      <input
        type={type}
        {...(onChange
          ? { value: value ?? "", onChange }
          : { defaultValue: value })}
        placeholder={placeholder}
        className={`text-[12px] w-full text-textPrimary placeholder:text-textTertiary 
          font-medium outline-none bg-transparent text-left ${className}`}
      />
    );
  };
  
  export default SmallInput;
  