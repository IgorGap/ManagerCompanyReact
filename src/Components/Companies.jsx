import { Box, List } from '@mui/material'
import { Company } from './Company'

export const Companies = ({
  companies,
  onEditRecord,
  onAddRecord,
  onDeleteRecord,
}) => {
  return (
    <>
      <div>
        <Box>
          <List>
            {companies.map((company, index) => (
              <Company
                key={index}
                company={company}
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
