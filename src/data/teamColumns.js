import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Typography } from '@mui/material';
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const TeamColumns = (colors) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1178px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
    const columns = [
        { field: "id", headerName: "ID", width: isTabletOrMobile ? 50 : 80 },
        {
          field: "name",
          headerName: "Name",
          cellClassName: "name-column--cell",
          flex: isTabletOrMobile ? 0 : 1,
          minWidth: 150,
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
          width: isTabletOrMobile ? 50 : 80
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: isTabletOrMobile ? 0 : 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
          minWidth: 200,
        },
        {
          field: "accessLevel",
          headerName: "Access Level",
          flex: 1,
          minWidth: 150,
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                width={`${isTabletOrMobile ? "100" : "65"}%`}
                m="0 auto"
                className="p-1.5 flex items-center gap-1 justify-between"
                backgroundColor={
                  access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.blueAccent[700]
                    : colors.primary[700]
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} className='flex justify-center flex-1'>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];

    return columns
};