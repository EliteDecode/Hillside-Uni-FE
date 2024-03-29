import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Library from "../../components/Library/Library";

const LibraryPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="library" />
        <Breadcrumbs primaryPage="Resources" secondaryPage="Library" />
        <Library />
        <NavFooter />
      </div>
    </div>
  );
};

export default LibraryPage;
