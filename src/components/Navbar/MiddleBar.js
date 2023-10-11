import React from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { useGlobalContext } from "../../utils/context";
import { mainLinks } from "../../utils/data";
import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const MiddleBar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const location = useLocation();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
    console.log(tempBtn.left);
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <Box className="sticky top-0 z-10 border bg-white">
      <Box className="container">
        <nav className="nav" onMouseOver={handleSubmenu}>
          <div className="nav-center py-2  flex items-center justify-between">
            <div className=" flex justify-between items-center w-[15%] ">
              <img src={logo} className="nav-logo" alt="" />
            </div>
            <div className=" flex items-center justify-between w-[80%]">
              <ul className="nav-links space-x-2 flex items-center  ">
                {mainLinks.map((link, index) => (
                  <Link to={`/${link.page}`} onClick={closeSubmenu}>
                    <li
                      className={`flex px-3  py-0.5 items-center ${
                        location.pathname.includes(`/${link.page}`)
                          ? "activeClass"
                          : ""
                      }`}
                      key={index}>
                      <button
                        className={`link-btn flex items-center  font-semibold text-[16px] `}
                        onMouseOver={displaySubmenu}>
                        {link.page}
                      </button>
                      {link.sublinks && <FaCaretDown />}
                    </li>
                  </Link>
                ))}
                <li>
                  <Button
                    size="large"
                    variant="contained"
                    disableElevation
                    sx={{
                      bgcolor: "#5e0001",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}>
                    Explore
                  </Button>
                </li>
              </ul>
            </div>
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars className="text-[45px] border rounded-md p-2" />
            </button>
          </div>
        </nav>
      </Box>
    </Box>
  );
};

export default MiddleBar;
