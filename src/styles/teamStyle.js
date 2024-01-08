export const teamStyle = (colors) => {
    const dataStyle =  {
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
      fontSize: '0.9rem',
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[700],
    },
    "& .css-1gens70-MuiDataGrid-root .MuiDataGrid-withBorderColor": {
      borderColor: `${colors.primary[500]} !important`
    },
    "& .css-112ysrj-MuiButtonBase-root-MuiCheckbox-root.Mui-checked": {
      color: `${colors.greenAccent[400]} !important`,
    },
    "& .MuiDataGrid-cell:focus": {
      outline: "none !important",
    },
    "& .MuiDataGrid-columnHeader:focus": {
      outline: "none !important",
    },
    "& .css-1gens70-MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
      outline: "none !important",
    },
    "& .MuiDataGrid-iconSeparator": {
      opacity: "0 !important",
    },
    "& .css-128fb87-MuiDataGrid-toolbarContainer button": {
      color: `${colors.grey[100]} !important`,
    },
    "& .MuiDataGrid-root .MuiDataGrid-cell":{
      whiteSpace: 'normal !important',
    }
 }
 return dataStyle
}