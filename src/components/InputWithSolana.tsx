import Image from "next/image";
import { RiFlashlightFill, RiEqualizer3Fill } from "react-icons/ri";
import SmallTagButton from "./SmallTagButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LiaGasPumpSolid } from "react-icons/lia";
import { LuShieldOff } from "react-icons/lu";
import { TbPlayFootball } from "react-icons/tb";
import { PiCoin } from "react-icons/pi";
import SmallInput from "./SmallInput";

const InputWithSolana = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="hidden lg:block">
        <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border flex flex-row h-7 pl-1 gap-1.5 justify-start items-center rounded-full  hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
          <span className="flex text-[14px] text-textTertiary font-medium">
            <RiFlashlightFill color="#5b6075" fill="#5b6075" />
          </span>
          <div className="flex flex-1 sm:max-w-8 min-w-0">
            <SmallInput />
          </div>
          <Image src={"/images/bnb.svg"} width={14} height={14} alt="bnb-img" />
          <div className="border-primaryStroke border-l flex h-full pr-0.5 pl-0.5 gap-0.75 justify-center items-center cursor-pointer">
            <span>
              <Tooltip>
                <TooltipTrigger>
                  <SmallTagButton label="P1" />
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="border border-primaryStroke bg-backgroundSecondary"
                >
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <TbPlayFootball /> 20%
                    </p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <LiaGasPumpSolid /> 0.001
                    </p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs"> <PiCoin/> 0.01</p>
                    <p className="flex items-center gap-1 text-textSecondary text-xs">
                      <LuShieldOff /> Off
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </span>
            <span>
              <Tooltip>
                <TooltipTrigger>
                  <SmallTagButton label="P2" />
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="border border-primaryStroke bg-backgroundSecondary"
                >
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <TbPlayFootball /> 20%
                    </p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <LiaGasPumpSolid /> 0.001
                    </p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs"><PiCoin/>0.01</p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <LuShieldOff /> Off
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </span>
            <span>
              <Tooltip>
                <TooltipTrigger>
                  <SmallTagButton label="P3" />
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="border border-primaryStroke bg-backgroundSecondary"
                >
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <TbPlayFootball /> 20%
                    </p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <LiaGasPumpSolid /> 0.001
                    </p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs"><PiCoin/>0.01</p>
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      <LuShieldOff /> Off
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputWithSolana;
