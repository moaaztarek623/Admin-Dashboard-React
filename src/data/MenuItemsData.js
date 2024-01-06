import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const menuItemData = () => {
  const data = [
    {
      title: "Dashboard",
      active: 'dashboard',
      path: "/",
      icon: <HomeOutlinedIcon />
    },
    {
      title: "Manage Team",
      active: 'team',
      path: "/team",
      icon: <PeopleOutlinedIcon />
    },
    {
      title: "Contacts Information",
      active: 'contacts',
      path: "/contacts",
      icon: <ContactsOutlinedIcon />
    },
    {
      title: "Invoices Balances",
      active: 'invoices',
      path: "/invoices",
      icon: <ReceiptOutlinedIcon />
    },
    {
      title: "Profile Form",
      active: 'form',
      path: "/form",
      icon: <PersonOutlinedIcon />
    },
    {
      title: "Calendar",
      active: "calendar",
      path: "/calendar",
      icon: <CalendarTodayOutlinedIcon />
    },
    {
      title: "FAQ Page",
      active: "faq",
      path: "/faq",
      icon: <HelpOutlineOutlinedIcon />
    },
    {
      title: "Bar Chart",
      active: "bar",
      path: "/bar",
      icon: <BarChartOutlinedIcon />
    },
    {
      title: "Pie Chart",
      active: "pie",
      path: "/pie",
      icon: <PieChartOutlineOutlinedIcon />
    },
    {
      title: "Line Chart",
      active: "line",
      path: "/line",
      icon: <TimelineOutlinedIcon />
    },
    {
      title: "Geography Chart",
      active: "geography",
      path: "/geography",
      icon: <MapOutlinedIcon />
    }
  ];
  return data;
};
