import { Box, Typography } from "@mui/material";
import React from "react";

const SubHeros = ({ section }) => {
  return (
    <Box className={`${section.replace(/[&, ]/g, "")}-section subHero py-10`}>
      <Box className="container">
        <Box className="sm:w-[55%] w-[100%] py-10">
          <Box>
            <Typography
              data-aos="fade-down"
              data-aos-duration="1400"
              variant="subtitle2"
              sx={{
                color: "#f7f7f780",
                fontSize: "18px",
                "@media (max-width: 567px)": {
                  fontSize: "14px",
                },
                opacity: "1",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}>
              {section === "about"
                ? `${section} us`
                : section === "contact"
                ? `${section} us`
                : section}
            </Typography>
            <Typography
              data-aos="fade-down"
              data-aos-duration="1200"
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "50px",
                lineHeight: "3.5rem",

                "@media (max-width: 567px)": {
                  fontSize: "44px",
                  lineHeight: "3.5rem",
                },
              }}>
              <span>Hillside</span> University of Science and Tech
              <span className="border-b-8 pb-2 border-[#1d6400]">nology</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubHeros;
