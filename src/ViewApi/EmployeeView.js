import React, { useState, useEffect } from 'react'
import employeeApi from '../api/employeeApi'
import EmployeeAdd from './EmployeeAdd'
import EmpionEdit from './EmployeeEdit'

export default function EmployeeView() {
    const [employee, setEmployee] = useState([])
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()

    useEffect(() => {
        employeeApi.list().then(data => {
            setEmployee(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async (id) => {
        employeeApi.deleted(id)
            .then(() => {
                setRefresh(true)
                window.alert('Data Successfully Delete')
            })
    }
    const onClick = (empID) => {
        setDisplayEdit(true)
        setId(empID)
    }
    return (
        <div>
            <div>
                {
                    displayEdit
                        ?
                        <EmpionEdit
                            closeAdd={() => setDisplayEdit(false)}
                            onRefresh={() => setRefresh(true)}
                            id={id}
                            setDisplay={setDisplayEdit}
                        />
                        :
                        display ?
                            <EmployeeAdd
                                setDisplay={setDisplay}
                                closeAdd={() => setDisplay(false)}
                                onRefresh={() => setRefresh(true)}
                            />
                            :
                            <>
                                <h2>List employee</h2>
                                <button onClick={() => setDisplay(true)}> Add Employee </button>
                                <table>
                                    <th>Employee ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Hire Date</th>
                                    <th>Job ID</th>
                                    <th>Salary</th>
                                    <th>Manager ID</th>
                                    <th>Deprtment ID</th>
                                    <th>Employee Profile</th>
                                    <tbody>
                                        {
                                            employee && employee.map(emp => {
                                                return (
                                                    <tr key={emp.employee_id}>
                                                        <td>{emp.employee_id}</td>
                                                        <td>{emp.first_name}</td>
                                                        <td>{emp.last_name}</td>
                                                        <td>{emp.email}</td>
                                                        <td>{emp.phone_number}</td>
                                                        <td>{emp.hire_date}</td>
                                                        <td>{emp.job_id}</td>
                                                        <td>{emp.salary}</td>
                                                        <td>{emp.manager_id}</td>
                                                        <td>{emp.department_id}</td>
                                                        <td>{emp.emp_profile}</td>
                                                        <button onClick={() => onDelete(emp.employee_id)}> Delete empion </button>
                                                        <button onClick={() => onClick(emp.employee_id)}> Edit empion </button>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </>
                }
            </div>
        </div>
    )
}
