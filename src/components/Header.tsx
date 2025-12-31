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
    <div className="border-b border-primaryStroke overflow-hidden flex flex-row w-full h-13 sm:h-16 min-h-12 sm:min-h-16 px-4 sm:px-4 lg:px-6 gap-4 sm:gap-4 lg:gap-6 justify-between sm:justify-start items-center">
      <div className="flex gap-2">
        <Image src={"/images/Logo1.svg"} width={36} height={36} alt="" />
        <div className="flex gap-2">
          {HeaderOption.map((option, index) => {
            return (
              <div
                key={index}
                className="flex flex-row h-8 cursor-pointer text-nowrap px-2 xl:px-3.5 justify-start items-center [transition:none] duration-0 hover:bg-primaryBlue/20 hover:text-primaryBlue hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-sm text-textPrimary"
              >
                <p>{option.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="border border-primaryStroke rounded-full px-2 py-1">
          <CiSearch size={18} color="#fff" />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[152px] border border-[#14f1951a] rounded-full text-white">
              <SelectValue className="" />
            </SelectTrigger>
            <SelectContent className="top-[44px]">
              <SelectItem value="light">
                <Image
                  src={"/images/sol.svg"}
                  width={18}
                  height={18}
                  alt="sol-image"
                />
                Solana
              </SelectItem>
              <SelectItem value="dark">
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
        <PrimaryButton label="Deposit" />
        <section className="bg-primaryStroke rounded-full p-1.5 flex items-center">
          <IoMdStarOutline color="white" size={18} />
        </section>
        <section className="bg-primaryStroke rounded-full p-1.5 flex items-center">
          <RiNotification3Line color="white" size={18} />
        </section>
        <div>
          <Select>
            <SelectTrigger className="w-38 border border-[#14f1951a] rounded-full text-white">
              <RiWalletLine />
              <SelectValue className="" />
            </SelectTrigger>
            <SelectContent className="top-11">
              <SelectItem value="light">
                <Image
                  src={"/images/sol.svg"}
                  width={18}
                  height={18}
                  alt="sol-image"
                />
                Solana
              </SelectItem>
              <SelectItem value="dark">
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
        <div >
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
