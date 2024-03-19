import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Home;
