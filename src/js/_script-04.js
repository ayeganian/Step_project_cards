// AJAX PART
axios.defaults.baseURL = 'http://cards.danit.com.ua/';

// Registration

document.addEventListener('DOMContentLoaded', function(){
const resultOfRegister = localStorage.getItem('token');
    if (resultOfRegister !== null){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + resultOfRegister;
    const headerLoginBtn = document.querySelector('.login-btn');
    const headerСreateBtn = document.querySelector('.add-card-btn');
    headerLoginBtn.classList.toggle('is-hidden');
    headerСreateBtn.classList.toggle('is-hidden');
  }

// ДЛя ручного удаления карточек с бэка
/*  function getCards() {
    axios.get('cards')
        .then((response) => {
          console.log((response.data));
        })
        .catch((error) => {
          console.log(error);
        });
  }
  function deleteCard() {
    return new Promise((resolve, reject) => {
      const authOptions = {
        method: 'DELETE',
        url: 'cards/173',
      }
      axios(authOptions).then((response) => {
        resolve(response);
      })
          .catch((error) => {
            reject(error);
          });
    }).then(response =>{
      console.log(response);
      getCards();
    })
  }
  deleteCard();*/

});
//  localStorage.clear()







