import React, { useContext, useEffect } from "react";
import SubTitle from "../../global/SubTitle";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/MockData";
import { tokens } from "../../theme";
import { InvoicesColumns } from "../../data/invoicesColumns";
import { teamStyle } from "../../styles/teamStyle";
import { MyContext } from "../../MyContext";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dataStyle = teamStyle(colors);
  const columns = InvoicesColumns(colors);
  const { sidebarWidth, setSidebarWidth } = useContext(MyContext);
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  }, [])
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  })
  return (
    <Box className="m-6">
      <SubTitle title={"Invoices"} subtitle="List of Invoice Balances" />
      <Box sx={dataStyle} width={`calc(100vw - ${sidebarWidth+60}px)`}>
        <DataGrid
          autoHeight
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[5, 10, 15, 50, 100]}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
