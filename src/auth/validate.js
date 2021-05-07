// import axios from 'axios'
// import { router } from 'vue-router'
// const validate = () => {
//   axios.get('http://localhost:3000/auth/validate_token', {
//     headers: {
//       uid: window.localStorage.getItem('uid'),
//       "access-token": window.localStorage.getItem('access-token'),
//       client:window.localStorage.getItem('client'),
//     }
//   }).then(res => {

//   }).error(err => {
//     window.localStorage.removeItem('uid')
//     window.localStorage.removeItem('access-token')
//     window.localStorage.removeItem('client')
//     window.localStorage.removeItem('name')
//     router.push({ name: 'Welcome' })

//   })

//   if (res.status === 401) {
//   }
// }

// export default validate