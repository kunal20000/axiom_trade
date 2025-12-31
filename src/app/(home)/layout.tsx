import Header from "@/components/Header";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      {
        children
      }
    </div>
  );
};
export default HomeLayout;
