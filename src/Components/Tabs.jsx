import { Box, Tab } from '@mui/material'
import React from 'react'
import { Tabs as MuiTabs } from '@mui/material'

export const Tabs = ({value, onChange}) => {
  return (
    <Box style={{ marginLeft: '16px' }} >
      <MuiTabs
        value={value}
        onChange={(event, newValue) =>
          onChange(newValue)
        }
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="МОИ КОМПАНИИ" />
        <Tab value="two" label="МОИ МЕНЕДЖЕРЫ" />
      </MuiTabs>
    </Box>
  )
}
