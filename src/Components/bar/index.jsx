import React from "react";
import SubTitle from "../../global/SubTitle";
import { Box } from "@mui/material";
import BarChart from "../../global/BarChart";

const Bar = () => {
  return (
    <Box className="m-6">
      <SubTitle title={"Bar"} subtitle={"Simple Bar Chart"} />
      <Box className="h-[75vh]">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
