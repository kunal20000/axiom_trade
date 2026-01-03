"use client";
import AppTooltip from "./AppTooltip";
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
  RiCameraLine,
} from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { LuBoxes, LuChefHat, LuUsersRound } from "react-icons/lu";
import { TbAtOff, TbChefHatOff, TbPill } from "react-icons/tb";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { pairs } from "@/consts/data";
import { PulseToken } from "@/types/pulse";
import { useEffect, useState } from "react";
import PulseTokenSkeleton from "./PulseTokenSkeleton";
import toast from "react-hot-toast";
import { showCopyToast } from "./ShowCopyToast";

const PulseTokenCard = () => {
  const [loading, setLoading] = useState(true);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev === 60 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <>
        {Array.from({ length: 6 }).map((_, i) => (
          <PulseTokenSkeleton key={i} />
        ))}
      </>
    );
  }

  return (
    <>
      {pairs.map((item: PulseToken, index) => {
        return (
          <div
            key={index}
            className="flex flex-1 w-full border-b border-b-primaryStroke relative hover:bg-primaryStroke/50 group"
          >
            <div className="pl-3 pr-3 sm:pr-4 pt-4 pb-0.5 flex flex-col inset-0 w-full  overflow-y-auto">
              <div className="flex gap-2 w-full">
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

                    <AppTooltip
                      trigger={
                        <div className="relative group/image">
                          <Image src={item.img} width={68} height={68} alt="" />
                          <button className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <RiCameraLine className="text-white" size={24} />
                          </button>
                        </div>
                      }
                      side="bottom"
                      contentClassName="!left-10 !px-1 !ml-10"
                      content={
                        <div className="relative group/image">
                          <Image
                            src={item.img}
                            width={200}
                            height={120}
                            alt=""
                          />
                          <button className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <RiCameraLine className="text-white" size={24} />
                          </button>
                        </div>
                      }
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
                        {item.addressShort}
                      </p>
                    }
                    content={
                      <p className="flex items-center text-textSecondary gap-1 text-xs">
                        copy {item.addressFull}
                      </p>
                    }
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex gap-1 min-w-0">
                        <h6 className="whitespace-nowrap text-textPrimary text-[16px] font-medium tracking-[-0.02em]">
                          {item.symbol}
                        </h6>
                        <AppTooltip
                          trigger={
                            <div className="flex gap-1 whitespace-nowrap truncate flex-nowrap text-textTertiary hover:text-primaryBlueHover text-[16px] lg:text-[14px] xl:text-[16px] font-medium tracking-[-0.02em] cursor-pointer">
                              <span className="max-[390px]:w-5 min-[1024px]:max-[1092px]:w-5  truncate">
                                {item.name}
                              </span>
                              <RiFileCopyLine
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    item.name
                                  );
                                  showCopyToast("Address copied to clipboard");
                                }}
                                className="shrink-0 mt-1"
                              />
                            </div>
                          }
                          content={
                            <p className="flex items-center overflow-x-auto text-textSecondary gap-1 text-xs">
                              {item.name}
                            </p>
                          }
                        />
                      </div>
                      <div className="flex flex-wrap  min-w-0 items-center gap-2">
                        <div className="text-primaryGreen text-sm font-medium">
                          {seconds}s
                        </div>
                        <div>
                          <TbPill className="text-textSecondary hover:text-primaryBlueHover" />
                        </div>
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
                    <div className="">
                      <section className="flex flex-col">
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
                  <div className="hidden sm:flex w-full justify-between">
                    <div className="flex gap-2 h-6">
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
                        className="!py-0.5 !px-3 text-[12px] !h-6 whitespace-nowrap"
                        icon={<RiFlashlightFill />}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex sm:hidden w-full items-center justify-between">
                <div className="flex gap-2 h-6 top-2">
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
                <div className="py-2">
                  <PrimaryButton
                    label="0 SOL"
                    className="px-3! text-[12px] !h-6"
                    icon={<RiFlashlightFill />}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default PulseTokenCard;
