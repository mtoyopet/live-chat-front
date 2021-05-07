// import axios from 'axios'
// import { ref } from 'vue'

// const getMessages = async () => {
//   const messages = ref(null)
//   const error = ref(null)

//   try {
//     const res = await axios.get('http://localhost:3000/messages', {
//       headers: {
//         uid: window.localStorage.getItem('uid'),
//         "access-token": window.localStorage.getItem('access-token'),
//         client:window.localStorage.getItem('client')
//       }
//     })
//     console.log(res)

//     if (!res) {
//       throw new Error('メッセージの受け取りに失敗しました')
//     }
//     error.value = null
//     messages.value = res.data
//     // console.log(messages.value)
//   } catch (err) {
//     error.value = 'メッセージの受け取りに失敗しました'
//     messages.value = null
//   }

//   return { error, messages }
// }

// export default getMessages