import React from 'react'
import SubTitle from '../../global/SubTitle';
import { Box } from '@mui/material';
import PieChart from '../../global/PieChart';

const Pie = () => {
  return (
    <Box className="m-6">
      <SubTitle title={"Pie"} subtitle="Simple Pie Chart" />
      <Box className='h-[75vh]'>
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie
