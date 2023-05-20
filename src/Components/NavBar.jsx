import React from 'react'
import { Basket, Bell, Menu } from '../icons'
import { Input } from '@mui/material'

export const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '51px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Menu style={{ marginLeft: '15px' }} />
      <Input
        placeholder="Управление компани..."
        style={{ width: '184px', marginLeft: '40.5px', size: '17px' }}
      />
      <Bell style={{ marginLeft: '16px', top: '15px' }} />
      <Basket style={{ marginLeft: '22.6px' }} />
    </div>
  )
}
