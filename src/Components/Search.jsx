import { Box, Input } from '@mui/material'
import React from 'react'
import { SearchIcon } from '../icons'

export const Search = () => {
  return (
    <Box
      style={{
        display: 'flex',
        width: '338px',
        marginLeft: '16px',
        marginTop: '16px',
        border: '2px solid #DDE2E5',
        borderRadius: 4,
      }}
    >
      <SearchIcon style={{ margin: '13px' }} />

      <Input
        placeholder="Быстрый поиск"
        style={{ width: '338px', height: '40px' }}
      />
    </Box>
  )
}
