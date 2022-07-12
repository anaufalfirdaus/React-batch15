import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/MainLayout'
import ChartItem from './List/ChartItem'
import RegionView from './ViewApi/RegionView'
import EmployeeView from './ViewApi/EmployeeView'



export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'region', element: <RegionView /> },
            { path: 'employee', element: <EmployeeView /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}
