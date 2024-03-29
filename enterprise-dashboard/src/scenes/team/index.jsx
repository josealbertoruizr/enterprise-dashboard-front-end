import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from '../../theme';
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenSettingsOutlined from "@mui/icons-material/LockOpenOutlined";
import SecuritySettingsOutlined from "@mui/icons-material/SecurityOutlined";
import Header from '../../components/Header';

const Team = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field:"age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Emailr",
            flex: 1,
        },
         {
            field: "access",
            headerName: "Access",
            flex: 1,
             renderCell: ({ row: { access } }) => {
                 return (
                     <Box
                         width="60%"
                         m="0 auto"
                         p="5px"
                         display="flex"
                         justifyContent="center"
                         backgroundColor={
                             access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
                         }
                         borderRadius="4px"
                     >
                         {access === "admin" && <AdminPanelSettingsOutlined />}
                         {access === "manager" && <SecuritySettingsOutlined />}
                         {access === "user" && <LockOpenSettingsOutlined />}
                         
                         <Typography variant='' color={colors.grey[100]} sx={{ ml: "5px" }}>
                             {access}
                         </Typography>
                         
                    </Box>
                )
            }
        },
    ];
  return (
      <Box>
          <Header title="Team" subtitle="Managing Team" />
          <Box
              m="40px 0 0 0"
              ml="40px"
              mr="40px"
              height="75vh"
               sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
          >
              <DataGrid
                  rows={mockDataTeam}
                  columns={columns}
              />
          </Box>
    </Box>
  )
}

export default Team