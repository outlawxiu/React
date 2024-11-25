import React from 'react'
import allRoutes from './routes/index'
import { useRoutes } from 'react-router-dom'

const App = () => {
  const routes = useRoutes(allRoutes)
  return (
    <div style={{width:"100%"}}>
      {routes}
    </div>
  )
}

export default App
