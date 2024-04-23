import Image from "next/image";
import NavDashboard from "./dashboard/navDashboard";
import ContainerCards from "./dashboard/infoCards/infoCards";
import InforCards from "./dashboard/graficos/infoGrafico";

export default function Home() {
  return (
    <>
      <NavDashboard/>
      <ContainerCards/>
      <InforCards/>
    </>
  );
}
