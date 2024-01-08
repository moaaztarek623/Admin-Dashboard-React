import React, { useContext, useEffect, useState } from "react";
import SubTitle from "../../global/SubTitle";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/MockData";
import { teamStyle } from "../../styles/teamStyle";
import { TeamColumns } from "../../data/teamColumns";
import { MyContext } from "../../MyContext";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dataStyle = teamStyle(colors);
  const columns = TeamColumns(colors);
  const { sidebarWidth, setSidebarWidth } = useContext(MyContext);
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  }, [])
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  })
  return (
    <Box className="m-6">
      <SubTitle title={"Team"} subtitle="Managing the Team Members" />
      <Box className="flex justify-center">
        <Box sx={dataStyle} width={`calc(100vw - ${sidebarWidth+60}px)`}>
          <DataGrid
            autoHeight
            checkboxSelection
            rows={mockDataTeam}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            pageSizeOptions={[5, 10, 15, 50, 100]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;