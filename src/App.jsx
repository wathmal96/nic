import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form1 from './components/Form1/Form1'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{
      display:"flex",
      justifyContent:"center",
      height:"100vh",
      alignItems:"center"
    }}>
      <Form1/>
    </Box>
  )
}

export default App
