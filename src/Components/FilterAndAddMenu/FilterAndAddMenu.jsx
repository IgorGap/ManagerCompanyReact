import { Stack } from '@mui/material'
import { Filter } from './atoms/Filter'
import { AddButton } from './atoms/AddButton'

export const FilterAndAddMenu = ({onOpenModal}) => {
  return (
    <Stack
      direction="row"
      marginLeft={'15px'}
      marginTop={'8px'}
      justifyContent="space-between"
      width="93%"
    >
      <Filter />
      <AddButton openModal={onOpenModal} />
    </Stack>
  )
}
