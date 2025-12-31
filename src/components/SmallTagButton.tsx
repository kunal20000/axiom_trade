interface SmallTagButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
  }
  
  const SmallTagButton = ({
    label,
    onClick,
    className = "",
  }: SmallTagButtonProps) => {
    return (
      <div
        onClick={onClick}
        className={`group w-5.5 h-5.5 flex flex-row gap-1 rounded-sm justify-center items-center 
        transition-colors ease-in-out duration-125 
        hover:bg-primaryBlueHover/10 ${className}`}
      >
        <span
          className="text-[12px] gap-1 flex flex-row justify-center items-center font-medium 
          transition-colors ease-in-out duration-125 
          text-textSecondary group-hover:text-primaryBlueHover"
        >
          {label}
        </span>
      </div>
    );
  };
  
  export default SmallTagButton;
  