import InputWithSolana from "@/components/InputWithSolana";
import Image from "next/image";
import {
  RiEqualizer3Fill,
  RiFileCopyLine,
  RiGroup3Line,
  RiSearchLine,
  RiUserSettingsLine,
  RiVipCrown2Line,
  RiCrosshair2Fill,
  RiFlashlightFill,
  RiEyeOffLine,
} from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { LuBoxes, LuChefHat, LuUsersRound } from "react-icons/lu";
import { TbAtOff, TbChefHatOff } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TbPill } from "react-icons/tb";
import PrimaryButton from "@/components/PrimaryButton";
import AppTooltip from "@/components/AppTooltip";
import { Divide } from "lucide-react";

const PulseComponent = () => {
  return (
    <div className="py-6 px-4 lg:px-6">
      <div className="flex gap-2">
        <h3 className="font-medium text-textPrimary text-[20px]">Pulse</h3>
        <div className="flex gap-1">
          <Image
            src={"/images/sol.svg"}
            width={32}
            height={32}
            alt="sol-image"
            className="rounded-full bg-primaryStroke/60 p-1"
          />
          <Image
            src={"/images/bnb.svg"}
            width={32}
            height={32}
            alt="sol-image"
            className="rounded-full bg-primaryStroke/60 p-1"
          />
        </div>
      </div>
      <div className="flex-1 mt-4 border-primaryStroke bg-backgroundSecondary border flex flex-row w-full justify-start items-start  rounded-lg sm:rounded-sm overflow-hidden">
        <div className="flex flex-1 h-full bg-backgroundSecondary rounded-sm sm:rounded-sm overflow-hidden">
          <div className="border-r border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden ">
            <div className="sticky top-0 z-30 w-full">
              <div className="hidden sm:flex sticky top-0 z-30 whitespace-nowrap flex-row w-full gap-3 min-h-12 justify-end items-center pr-3 pl-1 lg:pl-3 xl:pl-3 border-b border-primaryStroke">
                <div className="flex flex-row items-center gap-4 flex-1">
                  <span className="text-textPrimary text-[16px] font-medium flex-1">
                    New Pairs
                  </span>
                </div>
                <InputWithSolana />
                <AppTooltip
                  trigger={
                    <div className="flex flex-row p-1 w-6 h-6 justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-lg sm:rounded-sm relative hover:bg-primaryStroke/30">
                      <RiEqualizer3Fill color="#c8c9d1" />
                    </div>
                  }
                  content={
                    <p className="flex items-center text-textSecondary gap-1 text-xs">
                      Filters
                    </p>
                  }
                />
              </div>
            </div>
            <div className="flex flex-1 w-full relative hover:bg-primaryStroke/50 group">
              <div className="pl-3 pr-3 sm:pr-4 pt-4 pb-0.5 flex gap-2 inset-0 w-full overflow-y-auto">
                <div className="flex flex-col">
                  <div className="relative bg-backgroundSecondary p-0.5 rounded-[3px] border border-primaryBlue">
                    <div className="">
                      <AppTooltip
                        trigger={
                          <button className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 text-textTertiary hover:text-primaryBlueHover w-6 h-6 flex items-center justify-center rounded-sm bg-backgroundSecondary border border-secondaryStroke/50 -left-2 -top-2.5">
                            <RiEyeOffLine size={12} />
                          </button>
                        }
                        content={<p>Hide token</p>}
                      />
                      <AppTooltip
                        trigger={
                          <button className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-backgroundSecondary text-textTertiary hover:text-primaryBlueHover w-6 h-6 flex items-center justify-center rounded-sm border border-secondaryStroke/50 -left-2 top-4">
                            <TbChefHatOff size={12} />
                          </button>
                        }
                        content={<p>Blacklist dev</p>}
                      />
                      <AppTooltip
                        trigger={
                          <button className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-backgroundSecondary text-textTertiary hover:text-primaryBlueHover w-6 h-6 flex items-center justify-center rounded-sm border border-secondaryStroke/50 -left-2 top-10.5">
                            <TbAtOff size={12} />
                          </button>
                        }
                        content={<p>Blacklist Twitter profile</p>}
                      />
                    </div>

                    <Image
                      src={"/images/download1.png"}
                      width={68}
                      height={68}
                      alt=""
                    />
                    <div className="flex bg-pump absolute -bottom-1 -right-1 p-px w-4 h-4 justify-center items-center rounded-full z-30">
                      <div className="flex justify-center items-center bg-background absolute w-3.5 h-3.5 rounded-full z-30">
                        <Image
                          src={"/images/virtual-curve.svg"}
                          width={10}
                          height={10}
                          alt="pump-img"
                        />
                      </div>
                    </div>
                  </div>
                  <AppTooltip
                    side="right"
                    trigger={
                      <p className="text-textTertiary hover:text-primaryBlueHover font-medium text-[12px] cursor-pointer">
                        7esK...pump
                      </p>
                    }
                    content={
                      <p className="flex items-center text-textSecondary gap-1 text-xs">
                        copy nndjdnjndjnjjjnajssjajdd
                      </p>
                    }
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex gap-1 min-w-0">
                        <h6 className="whitespace-nowrap text-textPrimary text-[16px] font-medium tracking-[-0.02em]">
                          KOTH
                        </h6>
                        <AppTooltip
                          trigger={
                            <div className="flex gap-1 whitespace-nowrap flex-nowrap text-textTertiary hover:text-primaryBlueHover text-[16px] lg:text-[14px] xl:text-[16px] font-medium tracking-[-0.02em] cursor-pointer">
                              <span>King of the hill</span>
                              <RiFileCopyLine className="shrink-0 mt-1" />
                            </div>
                          }
                          content={
                            <p className="flex items-center text-textSecondary gap-1 text-xs">
                              King of the hill
                            </p>
                          }
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primaryGreen text-sm font-medium">
                          3s
                        </span>
                        <TbPill className="text-textSecondary hover:text-primaryBlueHover" />
                        <RiGroup3Line className="text-textSecondary hover:text-primaryBlueHover" />
                        <RiSearchLine className="text-textSecondary hover:text-primaryBlueHover" />
                        <AppTooltip
                          trigger={
                            <section className="flex items-center gap-1  text-white hover:text-primaryBlueHover">
                              <LuUsersRound className="text-textSecondary hover:text-primaryBlueHover" />
                              <p className="text-[12px]">1</p>
                            </section>
                          }
                          content={<p className="text-[12px]">Holders</p>}
                        />
                        <AppTooltip
                          trigger={
                            <section className="flex items-center gap-1  text-white hover:text-primaryBlueHover">
                              <AiOutlineTrophy className="text-textSecondary hover:text-primaryBlueHover" />
                              <p className="text-[12px]">0</p>
                            </section>
                          }
                          content={<p className="text-[12px]">KOLs</p>}
                        />
                        <AppTooltip
                          trigger={
                            <section className="flex items-center gap-1  text-white hover:text-primaryBlueHover">
                              <RiVipCrown2Line className="text-textSecondary hover:text-primaryBlueHover" />
                              <p className="text-[12px]">0/1</p>
                            </section>
                          }
                          content={
                            <div>
                              <p className="">Dev Migrations/Created</p>
                              <p className="!text-gray-400 !mt-1">
                                click to open in Solscan
                              </p>
                            </div>
                          }
                        />

                        <section className="flex items-center gap-1  text-white hover:text-primaryBlueHover">
                          <IoEyeOutline className="text-textSecondary hover:text-primaryBlueHover" />
                          <p className="text-[12px]">4</p>
                        </section>
                      </div>
                    </div>
                    <div>
                      <section
                        className="flex
                     flex-col"
                      >
                        <AppTooltip
                          trigger={
                            <div className="flex flex-row h-4.5 gap-1 justify-end items-end">
                              <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">
                                MC
                              </span>
                              <span className="text-[16px] font-medium text-[#2fe3ac]">
                                $4.88k
                              </span>
                            </div>
                          }
                          content={
                            <p className="flex items-center text-textSecondary gap-1 text-xs">
                              Market Cap
                            </p>
                          }
                        />
                        <AppTooltip
                          trigger={
                            <div className="flex flex-row h-4.5 gap-1 justify-end items-end">
                              <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">
                                V
                              </span>
                              <span className="text-[16px] font-medium text-white">
                                $71k
                              </span>
                            </div>
                          }
                          content={
                            <p className="flex items-center text-textSecondary gap-1 text-xs">
                              Volume{" "}
                            </p>
                          }
                        />
                        <div className="flex gap-1">
                          <AppTooltip
                            trigger={
                              <div className="flex justify-end">
                                <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">
                                  V
                                </span>
                                <Image
                                  src={"/images/sol.svg"}
                                  width={14}
                                  height={14}
                                  alt=""
                                />
                                <p className="text-white text-[12px]">0.132</p>
                              </div>
                            }
                            content={<p>Global Fees Paid</p>}
                          />
                          <AppTooltip
                            trigger={
                              <div className="flex flex-row h-4.5 gap-1 items-center justify-end ">
                                <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">
                                  TX
                                </span>
                                <span className="text-[12px] font-medium text-white">
                                  5{" "}
                                </span>
                                <div className="flex flex-row flex-1 min-w-6 max-w-6 h-0.5 bg-secondaryStroke rounded-full overflow-hidden">
                                  <div className="h-0.75 bg-[#2fe3ac] w-[20.6484px]"></div>
                                  <div className="h-0.75 bg-[#ec397a] w-[3.34375px]"></div>
                                </div>
                              </div>
                            }
                            content={
                              <div className="flex items-center text-textSecondary gap-1 text-xs">
                                Transations
                              </div>
                            }
                          />
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <section className="bg-backgroundSecondary border px-1.25 rounded-full border-primaryStroke/50 flex items-center text-[12px] gap-1 text-primaryGreen">
                        <RiUserSettingsLine className="text-primaryGreen" />
                        4%
                      </section>
                      <AppTooltip
                        trigger={
                          <section className="bg-backgroundSecondary px-1.25 border rounded-full border-primaryStroke/50 flex items-center text-[12px] gap-1 text-primaryGreen">
                            <LuChefHat className="text-primaryGreen" />
                            4%
                          </section>
                        }
                        content={<p></p>}
                      />
                      <AppTooltip
                        trigger={
                          <section className="bg-backgroundSecondary px-1.25 border rounded-full border-primaryStroke/50 flex items-center text-[12px] gap-1 text-primaryGreen">
                            <RiCrosshair2Fill className="text-primaryGreen" />
                            4%
                          </section>
                        }
                        side="bottom"
                        content={<p>Snipers Holding</p>}
                      />
                      <AppTooltip
                        trigger={
                          <section className="bg-backgroundSecondary px-1.25 border rounded-full border-primaryStroke/50 flex items-center text-[12px] gap-1 text-primaryGreen">
                            <LuBoxes className="text-primaryGreen" />
                            4%
                          </section>
                        }
                        side="bottom"
                        content={<p>Bundle Holding</p>}
                      />
                    </div>
                    <div className="hidden group-hover:block">
                      <PrimaryButton
                        label="0 SOL"
                        className="!py-0.5 !px-3 text-[12px]"
                        icon={<RiFlashlightFill />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 h-full bg-backgroundSecondary rounded-sm sm:rounded-sm overflow-hidden">
          <div className="border-r border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden ">
            <div className="sticky top-0 z-30 w-full">
              <div className=" hidden sm:flex sticky top-0 z-30 whitespace-nowrap flex-row w-full gap-3 min-h-12 justify-end items-center pr-3 pl-1 lg:pl-3 xl:pl-3 border-b border-primaryStroke">
                <div className="flex flex-row items-center gap-4 flex-1">
                  <span className="text-textPrimary text-[16px] font-medium flex-1">
                    Final Stretch
                  </span>
                </div>
                <InputWithSolana />
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-row p-1 w-6 h-6 justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-lg sm:rounded-sm relative hover:bg-primaryStroke/30">
                      <RiEqualizer3Fill color="#c8c9d1" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="border border-primaryStroke bg-backgroundSecondary">
                    <div className="flex flex-col gap-1">
                      <p className="flex items-center text-textSecondary gap-1 text-xs">
                        Filters
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 h-full bg-backgroundSecondary rounded-sm sm:rounded-sm overflow-hidden">
          <div className="border-r border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden ">
            <div className="sticky top-0 z-30 w-full">
              <div className=" hidden sm:flex sticky top-0 z-30 whitespace-nowrap flex-row w-full gap-3 min-h-12 justify-end items-center pr-3 pl-1 lg:pl-3 xl:pl-3 border-b border-primaryStroke">
                <div className="flex flex-row items-center gap-4 flex-1">
                  <span className="text-textPrimary text-[16px] font-medium flex-1">
                    Migrated
                  </span>
                </div>
                <InputWithSolana />
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-row p-1 w-6 h-6 justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-lg sm:rounded-sm relative hover:bg-primaryStroke/30">
                      <RiEqualizer3Fill color="#c8c9d1" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="border border-primaryStroke bg-backgroundSecondary">
                    <div className="flex flex-col gap-1">
                      <p className="flex items-center text-textSecondary gap-1 text-xs">
                        Filters
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PulseComponent;
