import {
  Box,
  Button,
  Dialog,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

export const EditModal = ({ open, onClose, record, onEditRecord }) => {
  const [newRecord, setNewRecord] = useState({ ...record })
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box
          style={{
            width: '235px',
            height: '20px',
            fontSize: '18px',
            fontFamily: 'Roboto',
            marginLeft: '14px',
            marginTop: '18px',
            fontWeight: 700,
          }}
        >
          Изменить информацию
        </Box>
        <Box
          style={{
            padding: '10px',
            marginTop: '10px',
            width: '309px',
          }}
        >
          <TextField
            fullWidth
            label="имя"
            value={newRecord.name}
            onChange={(e) =>
              setNewRecord({ ...newRecord, name: e.target.value })
            }
          />
        </Box>
        <Box style={{ padding: '10px' }}>
          <TextField
            label="логин"
            fullWidth
            value={newRecord.login}
            onChange={(e) =>
              setNewRecord({ ...newRecord, login: e.target.value })
            }
          />
        </Box>
        <Box style={{ padding: '10px' }}>
          <TextField
            label="почта"
            fullWidth
            value={newRecord.email}
            onChange={(e) =>
              setNewRecord({ ...newRecord, email: e.target.value })
            }
          />
        </Box>

        <Box>
          <Button
            style={{ margin: '10px', width: '144px' }}
            onClick={onClose}
            variant="contained"
          >
            Отменить
          </Button>
          <Button
            style={{ margin: '10px', width: '144px' }}
            onClick={() => onEditRecord(newRecord)}
            variant="contained"
          >
            Редактировать
          </Button>
        </Box>
      </>
    </Dialog>
  )
}
