import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/MainLayout'
import ChartItem from './List/ChartItem'

export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'region', element: <ChartItem /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}
