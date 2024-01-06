import React, { useContext, useEffect, useState } from "react";
import SubTitle from "../../global/SubTitle";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/MockData";
import { teamStyle } from "../../styles/teamStyle";
import { teamColumns } from "../../data/teamColumns";
import { MyContext } from "../../MyContext";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dataStyle = teamStyle(colors);
  const columns = teamColumns(colors);
  const { sidebarWidth, setSidebarWidth } = useContext(MyContext);

  return (
    <Box className="m-6">
      <SubTitle title={"Team"} subtitle="Managing the Team Members" />
      <Box className="flex justify-center">
        <Box sx={dataStyle} width={`calc(100vw - ${sidebarWidth+60}px)`}>
          <DataGrid
            checkboxSelection
            rows={mockDataTeam}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
