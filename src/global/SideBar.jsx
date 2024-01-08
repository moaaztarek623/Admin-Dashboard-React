import React, { useContext, useEffect, useRef, useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { tokens } from '../theme';
import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import personImage from '../images/pexels-stefan-stefancik-91227.jpg';
import { menuItemData } from '../data/MenuItemsData';
import { MyContext } from '../MyContext';
import { useMediaQuery } from 'react-responsive'

const Item = ({ title, path, icon, selected, setSelected, active }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      component={<Link to={path} />}
      active={selected === active}
      color={colors.grey[100]}
      onClick={() => setSelected(active)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const {sidebarWidth, setSidebarWidth} = useContext(MyContext);
  const location = useLocation();
  const pathActive = location?.pathname?.match(/[a-z]/ig)?.join("");
  const data = menuItemData();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(pathActive || "dashboard");
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const collapseRef = useRef(null);
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  }, [])
  useEffect(() => {
    setSidebarWidth(document.querySelector('.p-5.py-6.h-auto')?.offsetWidth);
  })

  const handleCollapse = () => {
      setTimeout(() => {
        setSidebarWidth(document.querySelector('.p-5')?.offsetWidth)
      }, 310);
      setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    if (isTabletOrMobile) {
      setTimeout(() => {
        setSidebarWidth(document.querySelector('.p-5')?.offsetWidth)
      }, 310);
      setIsCollapsed(true)
    }else {
      setTimeout(() => {
        setSidebarWidth(document.querySelector('.p-5')?.offsetWidth)
      }, 310);
      setIsCollapsed(false)
    }
  }, [isTabletOrMobile])
  return (
    <Box sx={{
      ".ps-sidebar-root": {
        border: "transparent !important"
      },
      ".css-ewdv3l": {
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem"
      },
      backgroundColor: `${colors.primary[400]} !important` }} className={`p-5 py-6 h-auto ${isTabletOrMobile ? "!px-2" : ""}`}>
      <Sidebar collapsed={isCollapsed} backgroundColor={`${colors.primary[400]}`} >
        <Menu iconShape="square" menuItemStyles={{
          button: {
            ":hover": {
              backgroundColor: "transparent !important",
              color: "#868dfb !important",
            },
            ".ps-active": {
              color: "#868dfb !important",
            }
          }
        }}>
            <MenuItem            
              onClick={isTabletOrMobile ? null : handleCollapse}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                  pb={'0.5rem'}
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton ref={collapseRef} onClick={isTabletOrMobile ? null : handleCollapse} size='large'>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    className='w-28 h-28 object-cover'
                    src={personImage}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Moaaz Tarek
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VIP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : "5%"} >
              <Item title={data[0].title} icon={data[0].icon} path={data[0].path} setSelected={setSelected} selected={selected} active={data[0].active} />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                className={` pb-0 ${isCollapsed ? "p-2" : "p-4" }`} >
                Data
              </Typography>
                {data.length >= 0 ?
                  data.slice(1, 4).map((item, index) => {
                    return (<Item title={item.title} icon={item.icon} path={item.path} key={index} setSelected={setSelected} selected={selected} active={item.active} />)
                  })
                : null}
              <Typography
                variant="h6"
                color={colors.grey[300]}
                className={` pb-0 ${isCollapsed ? "p-2" : "p-4" }`} >
                Pages
              </Typography>
                {data.length >= 0 ?
                  data.slice(4, 7).map((item, index) => {
                    return (<Item title={item.title} icon={item.icon} path={item.path} key={index} setSelected={setSelected} selected={selected} active={item.active} />)
                  })
                : null}
              <Typography
                variant="h6"
                color={colors.grey[300]}
                className={` pb-0 ${isCollapsed ? "p-2" : "p-4" }`} >
                Charts
              </Typography>
                {data.length >= 0 ?
                  data.slice(7).map((item, index) => {
                    return (<Item title={item.title} icon={item.icon} path={item.path} key={index} setSelected={setSelected} selected={selected} active={item.active} />)
                  })
                : null}
            </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideBar
