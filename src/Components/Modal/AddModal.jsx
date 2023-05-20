import { Box, Button, Dialog, TextField } from '@mui/material'
import React, { useState } from 'react'

export const AddModal = ({ isAddModalOpen, onClose, onAddRecord }) => {
  const [newRecord, setNewRecord] = useState({ name: '', login: '', email: '' })
  const handleClose = () => {
    onClose()
    setNewRecord({ name: '', login: '', email: '' })
  }
  return (
    <Dialog
      open={isAddModalOpen}
      onClose={handleClose}
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
          Добавить информацию
        </Box>
        <Box style={{ padding: '10px', marginTop: '10px', width: '309px' }}>
          <TextField
            label="имя"
            fullWidth
            value={newRecord.name}
            onChange={(e) =>
              setNewRecord({ ...newRecord, name: e.target.value })
            }
          />
        </Box>
        <Box style={{ padding: '10px' }}>
          <TextField
            label="адрес"
            fullWidth
            value={newRecord.login}
            onChange={(e) =>
              setNewRecord({ ...newRecord, login: e.target.value })
            }
          />
        </Box>
        <Box style={{ padding: '10px' }}>
          <TextField
            label="телефон"
            fullWidth
            value={newRecord.email}
            onChange={(e) =>
              setNewRecord({ ...newRecord, email: e.target.value })
            }
          />
        </Box>
        <Box>
          <Button
            onClick={handleClose}
            style={{ margin: '10px', width: '144px' }}
            variant="contained"
          >
            Отменить
          </Button>
          <Button
            style={{ margin: '10px', width: '144px' }}
            variant="contained"
            onClick={() => {
              onAddRecord(newRecord)
              handleClose()
            }}
          >
            Добавить
          </Button>
        </Box>
      </>
    </Dialog>
  )
}
