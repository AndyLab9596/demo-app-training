
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