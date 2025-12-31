import Header from "@/components/Header";
import Image from "next/image";
import HomeLayout from "./(home)/layout";
import PulseComponent from "@/screens/Pulse";

export default function Home() {
  return (
    <HomeLayout>
      <PulseComponent />
    </HomeLayout>
  );
}
