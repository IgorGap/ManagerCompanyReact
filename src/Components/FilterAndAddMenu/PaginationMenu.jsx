import { Stack } from '@mui/material'
import React from 'react'
import { DetailedPagination } from './atoms/DetailedPagination'
import { PaginationNum } from './atoms/PaginationNum'


export const PaginationMenu = () => {
  return (
    <Stack
      direction="row"
      marginLeft={'15px'}
      marginTop={'8px'}
      justifyContent="space-between"
      width="93%"
    >
      < PaginationNum />
      <DetailedPagination />
    </Stack>
  )
}
