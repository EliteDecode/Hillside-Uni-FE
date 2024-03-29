import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Hr from "../../components/Hr/Hr";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const HrPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="human resources" />
        <Breadcrumbs primaryPage="Resources" secondaryPage="Human Resources" />

        <Hr />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default HrPage;
