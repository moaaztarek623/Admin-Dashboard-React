import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" display="flex" className="p-8 py-5 rounded-md flex-col gap-5" sx={{background: colors.primary[400]}}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent={"space-between"} className="gap-1" flexDirection={"column"}>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600], mr: '5px' }}
          >
            {increase}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
