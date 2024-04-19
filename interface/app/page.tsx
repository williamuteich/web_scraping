import Image from "next/image";
import NavDashboard from "./dashboard/navDashboard";
import ContainerCards from "./dashboard/infoCards/containerCards";

export default function Home() {
  return (
    <>
      <NavDashboard/>
      <ContainerCards/>
    </>
  );
}
