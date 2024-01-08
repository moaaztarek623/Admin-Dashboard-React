import React, { useContext, useEffect } from "react";
import SubTitle from "../../global/SubTitle";
import { Box } from "@mui/material";
import BarChart from "../../global/BarChart";
import { useMediaQuery } from "react-responsive";
import { MyContext } from "../../MyContext";

const Bar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1178px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isVerySmallScreen = useMediaQuery({ query: "(max-width: 498px)" });
  const { sidebarWidth, setSidebarWidth } = useContext(MyContext);
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  }, [])
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  })
  return (
    <Box className="m-6">
      <SubTitle title={"Bar"} subtitle={"Simple Bar Chart"} />
      <Box maxWidth={`${isVerySmallScreen ? '75%' : ''}`} overflow={`${isVerySmallScreen ? 'scroll' : ''}`} sx={{overflowY: isVerySmallScreen ? "hidden" : ""}}>
        <Box className={`${isTabletOrMobile ? "h-[55vh]" ? isSmallScreen ? "h-[40vh]" : "h-[55vh]" : "h-[40vh]" : "h-[75vh]"}`} width={`${isVerySmallScreen ? '100vw' : `calc(100vw - ${sidebarWidth+60}px)`}`}>
        <BarChart isSmallScreen={isSmallScreen} />
        </Box>
      </Box>
    </Box>
  );
};

export default Bar;
