import { getServerSession } from "next-auth";

import Login from "./components/login";
import Navbar from "./components/navbar";

export default async function Home() {
  const session = await getServerSession();

  if (!session) return <Login />;

  return (
    <>
      <Navbar />
    </>
  );
}
