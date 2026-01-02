import { ReactNode } from "react";

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const PrimaryButton = ({
  label,
  onClick,
  icon,
  className = "",
  type = "button",
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex shrink-0 items-center justify-center gap-2
        bg-primaryBlue text-black
        rounded-full px-3 h-8
        font-bold text-sm
        transition-colors duration-150
        hover:bg-primaryBlue/90
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};

export default PrimaryButton;
