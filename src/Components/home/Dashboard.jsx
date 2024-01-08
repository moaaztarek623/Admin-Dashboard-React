import React from "react";
import SubTitle from "../../global/SubTitle";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import StatBox from "../../global/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../global/LineChart";
import { mockTransactions } from "../../data/MockData";
import ProgressCircle from "../../global/ProgressCircle";
import BarChart from "../../global/BarChart";
import GeoChart from "../../global/GeoChart";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1178px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const repeatGridColumns = 12;
  return (
    <Box className="m-6">
      {/*SUB_TITLE*/}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <SubTitle title={"Dashboard"} subtitle={"Welcome to your dashboard"} />
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{
            "& .css-18wo9z3-MuiButtonBase-root-MuiButton-root": {
              border: "1px solid",
              borderColor: "transparent",
              ":hover": {
                borderColor: `${theme.palette.mode === "light"
                  ? colors.blueAccent[700]
                  : colors.blueAccent[700]}`
              }
            }
          }}
        >
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid System */}
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns={`repeat(${repeatGridColumns}, 1fr)`}
        gridAutoRows="140px"
        className="gap-y-4 gap-x-6"
      >
        {/* !!!: Row (1) */}
        {/*Column 1*/}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn={`${isTabletOrMobile
            ? `span ${repeatGridColumns / 2}`
              ? isSmallScreen
                ? `span ${repeatGridColumns}`
                : `span ${repeatGridColumns / 2}`
              : `span ${repeatGridColumns}`
            : "span 3"}`}
        >
          <StatBox
            title="31,274"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase={"+15.3"}
            progress="0.80"
            subtitle="Email Sent"
          />
        </Box>
        {/*Column 2*/}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn={`${isTabletOrMobile
            ? `span ${repeatGridColumns / 2}`
              ? isSmallScreen
                ? `span ${repeatGridColumns}`
                : `span ${repeatGridColumns / 2}`
              : `span ${repeatGridColumns}`
            : "span 3"}`}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/*Column 3*/}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn={`${isTabletOrMobile
            ? `span ${repeatGridColumns / 2}`
              ? isSmallScreen
                ? `span ${repeatGridColumns}`
                : `span ${repeatGridColumns / 2}`
              : `span ${repeatGridColumns}`
            : "span 3"}`}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/*Column 4*/}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn={`${isTabletOrMobile
            ? `span ${repeatGridColumns / 2}`
              ? isSmallScreen
                ? `span ${repeatGridColumns}`
                : `span ${repeatGridColumns / 2}`
              : `span ${repeatGridColumns}`
            : "span 3"}`}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* !!!: Row (2) */}
        <Box
          gridColumn={`${isTabletOrMobile ? `span ${repeatGridColumns}` : `span 8`}`}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          className="rounded-md"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={`span ${isTabletOrMobile ? `${repeatGridColumns / 2}` ? isSmallScreen ? `${repeatGridColumns}` : `${repeatGridColumns / 2}` : `${repeatGridColumns}` : `4`}`}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="6px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            backgroundColor={colors.greenAccent[700]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) =>
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.user}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.txId}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>
                {transaction.date}
              </Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          )}
        </Box>
        {/* !!!: Row (3) */}
        <Box
          gridColumn={`span ${isTabletOrMobile ? `${repeatGridColumns / 2}` ? isSmallScreen ? `${repeatGridColumns}` : `${repeatGridColumns / 2}` : `${repeatGridColumns}` : `4`}`}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius={"6px"}
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={`span ${isTabletOrMobile ? `${repeatGridColumns / 2}` ? isSmallScreen ? `${repeatGridColumns}` : `${repeatGridColumns / 2}` : `${repeatGridColumns}` : `4`}`}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius={"6px"}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={`span ${isTabletOrMobile ? `${repeatGridColumns / 2}` ? isSmallScreen ? `${repeatGridColumns}` : `${repeatGridColumns / 2}` : `${repeatGridColumns}` : `4`}`}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          borderRadius={"6px"}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeoChart isDashboard={true} colors={colors} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
