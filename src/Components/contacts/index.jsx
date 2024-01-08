import React, { useContext, useEffect } from 'react'
import SubTitle from '../../global/SubTitle';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/MockData';
import { tokens } from '../../theme';
import { ContactsColumns } from '../../data/contactsColumns'
import { teamStyle } from '../../styles/teamStyle';
import { MyContext } from '../../MyContext';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dataStyle = teamStyle(colors);
  const columns = ContactsColumns(colors);
  const { sidebarWidth, setSidebarWidth } = useContext(MyContext);
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  }, [])
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  })
  return (
    <Box className="m-6">
      <SubTitle title={"Contacts"} subtitle={"List of Contacts for Future Reference"} />
      <Box sx={dataStyle} width={`calc(100vw - ${sidebarWidth+60}px)`} >
        <DataGrid
          autoHeight
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          slots={{toolbar: GridToolbar}}
          pageSizeOptions={[5, 10, 15, 50, 100]}
        />
      </Box>
    </Box>
  )
}

export default Contacts
