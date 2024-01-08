import React, { useContext, useEffect } from 'react'
import SubTitle from '../../global/SubTitle';
import { Box } from '@mui/material';
import PieChart from '../../global/PieChart';
import { useMediaQuery } from 'react-responsive';
import { MyContext } from '../../MyContext';

const Pie = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1178px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const { sidebarWidth, setSidebarWidth } = useContext(MyContext);
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  }, [])
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  })
  return (
    <Box className="m-6">
      <SubTitle title={"Pie"} subtitle="Simple Pie Chart" />
      <Box className={`${isTabletOrMobile ? "h-[55vh]" ? isSmallScreen ? "h-[40vh]" : "h-[55vh]" : "h-[40vh]" : "h-[75vh]"}`} width={`calc(100vw - ${sidebarWidth+60}px)`}>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie
