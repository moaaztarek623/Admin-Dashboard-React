import React from "react";
import SubTitle from "../../global/SubTitle";
import { Box } from "@mui/material";
import LineChart from "../../global/LineChart";

const Line = () => {
  return (
    <Box className="m-6">
      <SubTitle title="Line Chart" subtitle="Simple Line Chart" />
        <Box className="h-[75vh] max-w-[85vw]">
          <LineChart />
        </Box>
      </Box>
  );
};

export default Line;
