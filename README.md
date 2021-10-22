# Mini Project - Student Management

/login
/admin: layout

/admin/\*
feature: /admin/dashboard
feature: /admin/students

auth

- login
- sign up / sign in
- forget password

authSaga

LOOP

- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN

- call login API and get token + user info
- set token to local storage
- redirect to admin page

LOGOUT

- clear token from local storage
- Redirect to login page
