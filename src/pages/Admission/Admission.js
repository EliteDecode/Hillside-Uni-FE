import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import College from "../../components/Colleges/College";
import Programs from "../../components/Programs/Programs";
import Calender from "../../components/Calender/Calender";
import AdmissionPage from "../../components/AdmissionPage/AdmissionPage";

const Admission = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="admission" />
        <AdmissionPage />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default Admission;
