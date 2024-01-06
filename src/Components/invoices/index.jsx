import React from "react";
import SubTitle from "../../global/SubTitle";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/MockData";
import { tokens } from "../../theme";
import { invoicesColumns } from "../../data/invoicesColumns";
import { teamStyle } from "../../styles/teamStyle";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dataStyle = teamStyle(colors);
  const columns = invoicesColumns(colors);
  return (
    <Box className="m-6">
      <SubTitle title={"Invoices"} subtitle="List of Invoice Balances" />
      <Box sx={dataStyle} width="calc(100vw - 350px)">
        <DataGrid
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
