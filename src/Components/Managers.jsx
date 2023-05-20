import { Box, List } from '@mui/material'

import { Manager } from './Manager'

export const Managers = ({
  managers,
  onEditRecord,
  onAddRecord,
  onDeleteRecord,
}) => {

  return (
    <>
      <div>
        <Box>
          <List>
            {managers.map((manager, index) => (
              <Manager
                key={index}
                manager={manager}
                onEditRecord={(newValue) => onEditRecord(index, newValue)}
                onDeleteRecord={(newValueDel)=> onDeleteRecord(index, newValueDel)}
              />
            ))}
          </List>
        </Box>
      </div>
    </>
  )
}
