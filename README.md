
/login:
/admin


/admin/*
/admin/dashboard
/admin/students

auth
-login
- sign up / register
- forge password


authSaga 
- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN
- call login API to get token + user info
- set token to local storage
- redirect to admin page

LOGOUT
- clear token from local storage
- redirect to login page

authSlice -> define reducers
authSaga -> define effects

/admin/students: listing
/admin/students/add : add new student
/admin/students/edit/:studentId update 

Listings
- Search by name
- Filter by city
- Sort by name, mark
- Pagination

Add/Edit
- React hook form
- yup

Student Slice State
- loading
- list
- filter {}
- pagination
