import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'

export const AddButton = ({openModal}) => {
  return (
    <Button
      onClick={() => {
        openModal()
      }}
      startIcon={<Add fontSize="small" />}
      variant="contained"
      sx={{
        borderRadius: '16px',
        width: '105px',
        height: '32px',
        padding: '6px 12px',
        fontSize: '11px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0px',
        Font: 'Roboto',
      }}
    >
      Добавить
    </Button>
  )
}
