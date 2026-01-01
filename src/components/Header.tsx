import { HeaderOption } from "@/consts/data";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoMdStarOutline } from "react-icons/io";
import {
  RiNotification3Line,
  RiWalletLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  return (
    <div className="border-b border-primaryStroke flex flex-row w-full h-13 sm:h-16 min-h-12 sm:min-h-16 px-4 sm:px-4 lg:px-6 gap-4 sm:gap-4 lg:gap-6 justify-between items-center">
      <div className="flex items-center justify-center sm:min-w-0 gap-2">
        <Image src={"/images/Logo1.svg"} width={36} height={36} alt="" />
        <div className="flex-1 min-w-0 hidden sm:block">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {HeaderOption.map((option, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row h-8 shrink-0 cursor-pointer text-nowrap px-2 xl:px-3.5 justify-start items-center [transition:none] duration-0 hover:bg-primaryBlue/20 hover:text-primaryBlue hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-sm text-textPrimary"
                >
                  <p className="text-sm">{option.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="border border-primaryStroke bg-primaryStroke sm:bg-black rounded-full px-1 sm:px-2 py-1">
          <CiSearch size={18} color="#fff" />
        </div>
        <div className="hidden sm:block">
          <Select defaultValue="sol">
            <SelectTrigger className="border border-[#14f1951a] rounded-full text-white">
              <SelectValue className="" />
            </SelectTrigger>
            <SelectContent className="top-11 bg-backgroundTertiary border border-primaryStroke p-1  z-[9999]">
              <SelectItem value="sol" className="">
                <div className="hover:!bg-secondaryStroke/80 flex items-center gap-1">
                  <Image
                    src={"/images/sol.svg"}
                    width={18}
                    height={18}
                    alt="sol-image"
                  />
                  Solana
                </div>
              </SelectItem>
              <SelectItem value="bnb">
                <Image
                  src={"/images/bnb.svg"}
                  width={18}
                  height={18}
                  alt="sol-image"
                />
                BNB
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <PrimaryButton label="Deposit" className="hidden sm:block" />
        <section className="bg-primaryStroke hidden sm:block rounded-full p-1.5 flex items-center">
          <IoMdStarOutline color="white" size={18} />
        </section>
        <section className="bg-primaryStroke hidden sm:block rounded-full p-1.5 flex items-center">
          <RiNotification3Line color="white" size={18} />
        </section>
        <div>
          <Select defaultValue="solana">
            <SelectTrigger  className="w-38 border border-[#14f1951a] bg-primaryStroke rounded-full text-white">
              <RiWalletLine />
              <SelectValue className="" />
            </SelectTrigger>
            <SelectContent className="top-11">
              <SelectItem value="solana">
                <Image
                  src={"/images/sol.svg"}
                  width={18}
                  height={18}
                  alt="sol-image"
                />
                Solana
              </SelectItem>
              <SelectItem value="bnb">
                <Image
                  src={"/images/bnb.svg"}
                  width={18}
                  height={18}
                  alt="sol-image"
                />
                BNB
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Image
            src={"/images/profile.svg"}
            width={28}
            height={28}
            alt="profile-img"
            className="rounded-full"
          />
        </div>
        <div className="bg-primaryStroke rounded-full p-1.5 flex items-center">
          <RiUserSettingsLine color="white" size={18} />
        </div>
      </div>
    </div>
  );
};
export default Header;
