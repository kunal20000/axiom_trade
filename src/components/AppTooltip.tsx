import { ReactNode } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface AppTooltipProps {
  trigger: ReactNode;
  content: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  contentClassName?: string;
}

const AppTooltip = ({
  trigger,
  content,
  side = "top",
  sideOffset = 6,
  contentClassName = "",
}: AppTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {trigger}
      </TooltipTrigger>

      <TooltipContent
        side={side}
        sideOffset={sideOffset}
        className={`border border-primaryStroke bg-backgroundSecondary text-textSecondary text-xs ${contentClassName}`}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

export default AppTooltip;
