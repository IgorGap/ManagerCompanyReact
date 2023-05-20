import { Box } from '@mui/material'
import React from 'react'
import { PersInfoHeader } from './atoms/PersInfoHeader'
import { ActiveHeader } from './atoms/ActiveHeader'

export const HeaderMenu = () => {
  return (
    <Box style={{ width: '370px', height: '40px', background: '#F0F3F5' }}>
      <Box
        display={'flex'}
        direction="row"
        marginLeft={'15px'}
        marginTop={'8px'}
      >
        <ActiveHeader />
        <PersInfoHeader />
      </Box>
    </Box>
  )
}
