import { FilterList } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'

export const Filter = () => {
  return (<Stack
    direction="row"
    sx={{
      width: '114px',
      height: '32px',
      color: 'rgba(113, 116, 117, 1)',
      borderRadius: '16px',
      backgroundColor: 'rgba(234, 237, 238, 1)',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      padding: '6px 12px',
      boxSizing: 'border-box'
    }}
  >
    <Box>
      <FilterList />
    </Box>
    <Box fontSize="13px">
      Фильтр
    </Box>
    <Box>
      <Box
        sx={{
          width: '16px',
          height: '13px',
          backgroundColor: 'rgba(25, 118, 210, 1)',
          color: 'white',
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '10px'
        }}
      >
        1
      </Box>
    </Box>
  </Stack>)
}
