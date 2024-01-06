import React from 'react'
import SubTitle from '../../global/SubTitle';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/MockData';
import { tokens } from '../../theme';
import { contactsColumns } from '../../data/contactsColumns'
import { teamStyle } from '../../styles/teamStyle';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dataStyle = teamStyle(colors);
  const columns = contactsColumns(colors);
  return (
    <Box className="m-6">
      <SubTitle title={"Contacts"} subtitle={"List of Contacts for Future Reference"} />
      <Box sx={dataStyle} width="calc(100vw - 350px)" >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          slots={{toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Contacts
