// AJAX PART
// AJAX-часть

axios.defaults.baseURL = 'http://cards.danit.com.ua/';


// function getCards(){
//
//   const token =localStorage.getItem('token') ;
//   // console.log(token);
//   // const token ='8eca04c25c57' ;
//
//   axios.get('http://cards.danit.com.ua/cards',  {
//     headers: { Authorization: `Bearer ${token}` }
//   })
//       .then((response) => {
//          console.log(response);
//       })
//       .catch((error) => {
//          console.log(error);
//       });
// }
// getCards();
//
//
// function deleteCard() {
//   return new Promise((resolve, reject) => {
//
//     const authOptions = {
//       method: 'DELETE',
//       url: 'cards/139',
//     }
//     axios(authOptions).then((response) => {
//       resolve(response);
//     })
//         .catch((error) => {
//           reject(error);
//         });
//   }).then(response =>{
//     getCards();
//   })
//   }
//
// // getCards();
//  deleteCard();

//   postCards(data) {
//        const token = '8eca04c25c57';
//
//       axios.post('http://cards.danit.com.ua/cards', data, {
//               headers: { Authorization: `Bearer ${token}` }
//            })
//                 .then((response) => {
//                   console.log(response);
//                   console.log(response.data.id);
//                 })
//                 .catch((error) => {
//                   console.log(error);
//                 });
// }


