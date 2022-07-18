import {call,put} from 'redux-saga/effects'
import apiEmployee from '../../api/employeeApi'
import { GetEmployeeSuccess,GetEmployeeFailed,AddEmployeeSuccess,AddEmployeeFailed
    ,DelEmployeeSuccess,DelEmployeeFailed,GetOneEmployeeSuccess,GetOneEmployeeFailed
    ,EditEmployeeSuccess, EditEmployeeFailed,EditNoEmployeeSuccess,EditNoEmployeeFailed } from '../Action/EmployeeAction'

function* handleGetEmployee(){
    try {
        const result = yield call(apiEmployee.list)
        yield put(GetEmployeeSuccess(result))
    } catch (error) {
        yield put(GetEmployeeFailed(error))
    }
}

function* handleDelEmployee(action){
    const{payload} = action
    try {
        const result = yield call(apiEmployee.deleted,payload)
        yield put(DelEmployeeSuccess(payload))
    } catch (error) {
        yield put(DelEmployeeFailed(error))
    }
}

function* handleAddEmployee(action){
    const {payload} = action
    try {
        const result = yield call(apiEmployee.create,payload)
        yield put(AddEmployeeSuccess(result.data))
    } catch (error) {
        yield put(AddEmployeeFailed(error))
    }
}

function* handleGetOneEmployee(action){
    const {payload} = action
    try {
        const result = yield call(apiEmployee.findOne,payload)
        yield put(GetOneEmployeeSuccess(result))
    } catch (error) {
        yield put(GetOneEmployeeFailed(error))
    }
}

function* handleEditEmployee(action){
    const {payload} = action
    try {
        const result = yield call(apiEmployee.update, payload)
        yield put (EditEmployeeSuccess(result.data[1]))
    } catch (error) {
        yield put (EditEmployeeFailed(error))
    }
}

function* handleEditNoEmployee(action){
    const {payload} = action
    try {
        const result = yield call(apiEmployee.updateNoFile, payload)
        yield put (EditNoEmployeeSuccess(result.data[1]))
    } catch (error) {
        yield put (EditNoEmployeeFailed(error))
    }
}
export {
    handleGetEmployee,
    handleDelEmployee,
    handleAddEmployee,
    handleGetOneEmployee,
    handleEditEmployee,
    handleEditNoEmployee
}