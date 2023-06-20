import { getServerSession } from "next-auth";

import Login from "./components/login";
import Navbar from "./components/navbar";
import LeftSideBar from "./components/leftsidebar";
import RightSidebar from "./components/rightsidebar";
import Feed from "./components/feed";

export default async function Home() {
  const session = await getServerSession();

  if (!session) return <Login />;

  return (
    <>
      <Navbar />
      <LeftSideBar />
      <RightSidebar />
      <Feed />
    </>
  );
}
