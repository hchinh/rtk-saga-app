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

## Students

ROUTINGS

- /admin/students: listing
- /admin/students/add: add new student
- /admin/students/:studentId: update a student

LISTING

- Search by name
- Filter by city
- Sort by name, mark
- Pagination

student slice state:

- loading
- list
- pagination
- filter {page: 1, limit: 10, ...}

ADD/EDIT

- React Hook Form v7
- Yup
