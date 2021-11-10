import { takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ListParams } from "../../models";
import { studentActions } from "./studentSlice";


function* fetchStudentList(action: PayloadAction<ListParams>) {

}

export default function* studentSaga() {
    // watch fetch student action
    yield takeLatest(studentActions.fetchStudentList, fetchStudentList)
}