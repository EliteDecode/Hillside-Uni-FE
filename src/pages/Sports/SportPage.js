import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Sport from "../../components/Sports/Sport";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const SportPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="sports and recreation" />
        <Breadcrumbs
          primaryPage="Student Life"
          secondaryPage="Sports and Recreation"
        />
        <Sport />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default SportPage;
