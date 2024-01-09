import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import {ColorModeContext, tokens} from '../theme'
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined" ;
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined" ;
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useMediaQuery } from 'react-responsive';

const NavBar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 568px)" });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display={'flex'} justifyContent={'space-between'} p={2} flexDirection={`${isSmallScreen ? 'column' : 'row'}`}>
    {/* SEARCH_BAR */}
      <Box display={'flex'} backgroundColor={colors.primary[400]} borderRadius={'3px'}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type="button" size='large'>
          <SearchIcon />
        </IconButton>
      </Box>
    {/* ICONS_BOX */}
      <Box display="flex" justifyContent={'center'}>
        <IconButton onClick={colorMode.toggleColorMode} size="large">
          {theme.palette.mode === "dark" ? (<LightModeOutlinedIcon />) : (<DarkModeOutlinedIcon />)}
        </IconButton>
        <IconButton size="large">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default NavBar
