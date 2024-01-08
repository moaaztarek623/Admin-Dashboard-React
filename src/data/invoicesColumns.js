import { Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export const InvoicesColumns = (colors) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1178px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const columns = [
    { field: "id", headerName: "ID", width: isTabletOrMobile ? 50 : 80 },
    {
      field: "name",
      headerName: "Name",
      flex: isTabletOrMobile ? 0 : 1,
      minWidth: 150,
      cellClassName: "name-column--cell"
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
      field: "cost",
      headerName: "Cost",
      flex: isTabletOrMobile ? 0 : 1,
      renderCell: params =>
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
    },
    {
      field: "date",
      headerName: "Date",
      flex: isTabletOrMobile ? 0 : 1,
    }
  ];

  return columns;
};
