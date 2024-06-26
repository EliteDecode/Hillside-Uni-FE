import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import CoreValues from "../../components/CoreValues/CoreValues";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import VisionMission from "../../components/VisionMission/VisionMission";
import Objectives from "../../components/Objectives/Objectives";
import WhyUs from "../../components/WhyUs/WhyUs";
import BoardOfRegeants from "../../components/BoardOfRegeants/BoardOfRegeants";
import GoverningCouncil from "../../components/GoverningCouncil/GoverningCouncil";
import TuitionFee from "../../components/TuitionFee/TuitionFee";
import { useParams } from "react-router-dom";

const TuitionFeePage = () => {
  const { closeSubmenu } = useGlobalContext();

  const { year } = useParams();

  const getSession =
    year == "23-24"
      ? "2023-2024 Session"
      : year == "24-25"
      ? "2024-2025 Session"
      : "";

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section={`Fees for ${getSession}`} />
        <TuitionFee />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default TuitionFeePage;
