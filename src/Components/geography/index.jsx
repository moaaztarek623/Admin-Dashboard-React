import React from "react";
import SubTitle from "../../global/SubTitle";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import GeoChart from "../../global/GeoChart";

const Geography = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box className="m-6">
      <SubTitle title={"Geography"} subtitle={"Simple Geography Chart"} />
      <Box
        className={`rounded-[0.275rem] border border-[${colors
          .grey[100]}] h-[75vh]`}
      >
        <GeoChart colors={colors} />
      </Box>
    </Box>
  );
};

export default Geography;
