import React, { useState } from 'react'
import { Box, Container } from '@mui/material'
import { Tabs, NavBar, Search, Managers, Companies } from './Components'
import { FilterAndAddMenu } from './Components/FilterAndAddMenu/FilterAndAddMenu'
import { PaginationMenu } from './Components/FilterAndAddMenu/PaginationMenu'
import { HeaderMenu } from './Components/FilterAndAddMenu/HeaderMenu'
import { AddModal } from './Components/Modal/AddModal'
import { DataManagers } from './jsonData'
import { DataCompanies } from './jsonData'

const App = () => {
  const [value, setValue] = useState('one')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [managers, setManagers] = useState(DataManagers)
  const [companies, setCompanies] = useState(DataCompanies)

  const handleAddRecord = (newRecord) => {
    if (newRecord.name.trim() !== '') {
      value === 'one'
        ? setCompanies([...companies, newRecord])
        : setManagers([...managers, newRecord])
    }
  }

  const handleDeleteRecord = (index) => {
    if (value === 'one') {
      const updatedCompanies = companies.filter((_, i) => i !== index)
      setCompanies(updatedCompanies)
    } else {
      const updatedManagers = managers.filter((_, i) => i !== index)
      setManagers(updatedManagers)
    }
  }

  const handleEditRecord = (index, newValue) => {
    if (value === 'one') {
      const updatedCompanies = [...companies]
      updatedCompanies[index] = newValue
      setCompanies(updatedCompanies)
    } else {
      const updatedManagers = [...managers]
      updatedManagers[index] = newValue
      setManagers(updatedManagers)
    }
  }

  return (
    <Container>
      <Box
        style={{
          display: 'flex',
          alignAtems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          style={{
            width: '370px',
            height: '780px',
            border: '2px solid #DDE2E5',

          }}
        >
          <NavBar />
          <Tabs onChange={(newValue) => setValue(newValue)} value={value} />
          <Search />
          <FilterAndAddMenu onOpenModal={() => setIsAddModalOpen(true)} />
          <PaginationMenu />
          <HeaderMenu />

          <AddModal
            isAddModalOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            onAddRecord={handleAddRecord}
          />

          <Box style={{ height: '440px' }}>
            {value === 'one' ? (
              <Companies
                companies={companies}
                onAddRecord={handleAddRecord}
                onEditRecord={handleEditRecord}
                onDeleteRecord={handleDeleteRecord}
              />
            ) : (
              <Managers
                managers={managers}
                onAddRecord={handleAddRecord}
                onEditRecord={handleEditRecord}
                onDeleteRecord={handleDeleteRecord}
              />
            )}
          </Box>
          <PaginationMenu />
        </Box>
      </Box>
    </Container>
  )
}

export default App
