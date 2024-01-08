import { useMediaQuery } from "react-responsive";

export const ContactsColumns = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1178px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const columns = [
    { field: "id", headerName: "ID", width: isTabletOrMobile ? 50 : 80 },
    {
      field: "registrarId",
      headerName: "Registrar ID",
      width: isTabletOrMobile ? 70 : 100
    },
    {
      field: "name",
      headerName: "Name",
      flex: isTabletOrMobile ? 0 : 1,
      minWidth: 150,
      cellClassName: "name-column--cell"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "center",
      align: "center",
      width: isTabletOrMobile ? 50 : 80
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: isTabletOrMobile ? 0 : 1
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 200
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      minWidth: 200
    },
    {
      field: "city",
      headerName: "City",
      flex: isTabletOrMobile ? 0 : 1
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: isTabletOrMobile ? 0 : 1
    }
  ];

  return columns;
};
