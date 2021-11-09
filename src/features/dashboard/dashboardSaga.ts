import { all, takeLatest, call, put } from "@redux-saga/core/effects";
import cityApi from "../../api/cityApi";
import studentApi from "../../api/studentApi";
import { City, ListResponse, Student } from "../../models";
import { dashboardActions, RankingByCity } from "./dashboardSlice";


function* fetchStatistics() {
    const responseList: Array<ListResponse<Student>> = yield all([
        call(studentApi.getAllStudents, { _page: 1, _limit: 1, gender: 'male' }),
        call(studentApi.getAllStudents, { _page: 1, _limit: 1, gender: 'female' }),
        call(studentApi.getAllStudents, { _page: 1, _limit: 1, mark_gte: 8 }),
        call(studentApi.getAllStudents, { _page: 1, _limit: 1, marl_lte: 5 }),
    ]);

    const statisticList = responseList.map(x => x.pagination._totalRows);
    const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;
    yield put(dashboardActions.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount }))
}
function* fetchHighestStudentList() {
    const { data }: ListResponse<Student> = yield call(studentApi.getAllStudents, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'desc'
    })

    yield put(dashboardActions.setHighestStudentList(data))
}

function* fetchLowestStudentList() {
    const { data }: ListResponse<Student> = yield call(studentApi.getAllStudents, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'asc'
    })

    yield put(dashboardActions.setLowestStudentList(data))
}

function* fetchRankingByCityList() {
    const { data: cityList }: ListResponse<City> = yield call(cityApi.getAllCities)

    const callList = cityList.map(item => call(studentApi.getAllStudents, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'desc',
        city: item.code
    }))

    const responseList: Array<ListResponse<Student>> = yield all(callList);
    const rankingByCityList: Array<RankingByCity> = responseList.map((x, idx) => ({
        cityId: cityList[idx].code,
        rankingList: x.data
    }))

    yield put(dashboardActions.setRankingByCityList(rankingByCityList))
}

function* fetchDashboardData() {
    try {
        yield all([
            call(fetchStatistics),
            call(fetchHighestStudentList),
            call(fetchLowestStudentList),
            call(fetchRankingByCityList),
        ])
    }
    catch (error) {
        console.log('error', error)
    }
}

export default function* dashboardSaga() {
    yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}