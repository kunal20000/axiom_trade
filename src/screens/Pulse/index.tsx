"use client";
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
import PulseTokenCard from "@/components/PulseTokenCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { pulseTabs, TokenColumns } from "@/consts/data";
const PulseComponent = () => {
  const [activeTab, setActiveTab] = useState<"new" | "final" | "migrated">(
    "new"
  );

  return (
    <div className="py-6 px-2 sm:px-4 lg:px-6">
      <div className="flex gap-2">
        <h3 className="font-medium text-textPrimary text-[20px] hidden sm:block">
          Pulse
        </h3>
        <div className="flex flex-col w-full">
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
            <div className="sm:hidden flex overflow-x-auto scrollbar-hide">
              {pulseTabs.map((tab) => (
                <section
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-nowrap flex flex-row h-8 px-3 gap-1 justify-center items-center min-w-max 
        rounded-full cursor-pointer transition-colors duration-200
        ${
          activeTab === tab.key
            ? "bg-secondaryStroke text-white"
            : "text-textPrimary"
        }`}
                >
                  {tab.label}
                </section>
              ))}
            </div>
          </div>
          {activeTab === "new" && (
            <div className="sm:hidden mt-4 w-full border border-primaryStroke bg-backgroundSecondary rounded-lg overflow-hidden">
              <div className="sm:h-125 w-full  overflow-y-auto">
                <PulseTokenCard />
              </div>
            </div>
          )}
          {activeTab === "final" && (
            <div className="sm:hidden mt-4 w-full border border-primaryStroke bg-backgroundSecondary rounded-lg overflow-hidden">
              <div className="sm:h-125 w-full overflow-y-auto">
                <PulseTokenCard />
              </div>
            </div>
          )}
          {activeTab === "migrated" && (
            <div className="sm:hidden mt-4 w-full border border-primaryStroke bg-backgroundSecondary rounded-lg overflow-hidden">
              <div className="sm:h-125 w-full overflow-y-auto">
                <PulseTokenCard />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 mt-4 border-primaryStroke bg-backgroundSecondary border hidden lg:flex flex-row w-full justify-start items-start  rounded-lg sm:rounded-sm overflow-hidden">
        {TokenColumns.map((column, index) => {
          return (
            <div
              key={index}
              className="flex flex-1 h-full bg-backgroundSecondary rounded-sm sm:rounded-sm overflow-hidden"
            >
              <div className="border-r border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden ">
                <div className="sticky top-0 z-30 w-full">
                  <div className="hidden sm:flex sticky top-0 z-30 whitespace-nowrap flex-row w-full gap-3 min-h-12 justify-end items-center pr-3 pl-1 lg:pl-3 xl:pl-3 border-b border-primaryStroke">
                    <div className="flex flex-row items-center gap-4 flex-1">
                      <span className="text-textPrimary text-[16px] font-medium flex-1">
                        {column.title}
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
                <div className="h-125 w-full overflow-y-auto scrollbar-hide">
                  <PulseTokenCard />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-1 mt-4 border-primaryStroke bg-backgroundSecondary border sm:flex hidden lg:hidden flex-row w-full justify-start items-start  rounded-lg sm:rounded-sm overflow-hidden">
        <Tabs defaultValue="new-pairs" className="w-full">
          <TabsList className="w-full">
            <div className="border-b-2 border-b-primaryStroke flex justify-between items-center pt-0.5 !gap-2 !w-full">
              <div className="">
                <TabsTrigger className="h-10 text-base" value="new-pairs">
                  New Pairs
                </TabsTrigger>
                <TabsTrigger className="h-10 text-base" value="final-stretch">
                  Final Stretch
                </TabsTrigger>
                <TabsTrigger className="h-10 text-base" value="migrated">
                  Migrated
                </TabsTrigger>
              </div>
              <div className="flex flex-row p-1 w-6 h-6 justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-lg sm:rounded-sm relative hover:bg-primaryStroke/30">
                <RiEqualizer3Fill color="#c8c9d1" />
              </div>
            </div>
          </TabsList>
          <TabsContent value="new-pairs">
            <div className="h-125 overflow-y-auto">
              <PulseTokenCard />
            </div>
          </TabsContent>
          <TabsContent value="final-stretch">
            <div className="h-125 overflow-y-auto">
              <PulseTokenCard />
            </div>
          </TabsContent>
          <TabsContent value="migrated">
            <div className="h-125 overflow-y-auto">
              <PulseTokenCard />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default PulseComponent;
