import { getServerSession, Session } from "next-auth";
import NavbarContent from "./NavbarContent";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = (await getServerSession(authOptions)) as Session | null;
  return <NavbarContent session={session} />;
}
