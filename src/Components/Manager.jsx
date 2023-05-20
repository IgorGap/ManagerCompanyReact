import { Delete, Edit } from '@mui/icons-material'
import {
  Box,
  IconButton,
  Stack,
  Switch,
  styled,
} from '@mui/material'
import { useState } from 'react'
import { EditModal } from './Modal/EditModal'

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 43,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: theme.palette.primary.main,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.light,
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    opacity: 1,
  },
}))

export const Manager = ({ onDeleteRecord, onEditRecord, index, manager }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const label = { inputProps: { 'aria-label': 'Switch demo' } }
  return (
    <Stack
      direction="row"
      sx={{
        width: '370px',
        height: '74px',
        alignItems: 'center',
      }}
    >
      <Box>
        <StyledSwitch sx={{ marginLeft: '16px' }} {...label} defaultChecked />
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          width: '160px',
          height: '65px',
          marginLeft: '54px',
        }}
      >
        <Box sx={{ marginBottom: '5px' }}>{manager.name}</Box>
        <Box sx={{ marginBottom: '5px' }}>{manager.login}</Box>
        <Box>{manager.email}</Box>
      </Box>

      <Box>
        <IconButton edge="end" onClick={() => setIsEditModalOpen(true)}>
          <Edit />
        </IconButton>
        <IconButton
          sx={{ marginLeft: '14px' }}
          edge="end"
          onClick={() => onDeleteRecord(index)}
        >
          <Delete />
        </IconButton>
      </Box>

      <EditModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        record={manager}
        onEditRecord={(newValue) => {
          onEditRecord(newValue)
          setIsEditModalOpen(false)
        }}
      />
    </Stack>
  )
}
