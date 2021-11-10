import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import studentApi from "../../api/studentApi";
import { ListParams, ListResponse, Student } from "../../models";
import { studentActions } from "./studentSlice";


function* fetchStudentList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<Student> = yield call(studentApi.getAllStudents, action.payload)
        yield put(studentActions.fetStudentListSuccess(response))
    } catch (error) {
        console.log('failed to fetch student list')
        yield put(studentActions.fetchStudentListFailed('error'))
    }
}

export default function* studentSaga() {
    // watch fetch student action
    yield takeLatest(studentActions.fetchStudentList, fetchStudentList)
}