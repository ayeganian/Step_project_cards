const modal = new Modal(document.getElementById('login-modal'));
document.querySelector('.login-btn').openModal = modal.open.bind(modal);

const loginForm = new Form('GET', 'login-form', 'login-wrapper');
loginForm.render(document.getElementById('modal'));

const emailInput = new Input('email', 'Enter your email', 'email' ,'', '', 'annettt@gmail.com');
emailInput.render(document.getElementById('login-form'));

const passwordInput = new Input('password', 'Enter your password', 'password' ,'123456');
passwordInput.render(document.getElementById('login-form'));

const submitInput = new Input('submit', '','' , 'Login');
submitInput.render(document.getElementById('login-form'));

const modalCard = new Modal(document.getElementById('add-card-modal'));
const addCardBtn = document.querySelector('.add-card-btn');
addCardBtn.openModal = modalCard.open.bind(modalCard);

const formCard = new Form("POST", 'visit-modal', '');
formCard.render(document.querySelector('#card-modal'));


let select = new Select('add', 'select-doctors',  '-select doctor-', 'Cardio', 'Dantist', 'Therapist');
select.render(document.getElementById('visit-modal'));


const selectDoctor = document.getElementById('select-doctors');
selectDoctor.addEventListener('change', function () {

  // let cardioForm = '';
  const removeForm = document.getElementsByClassName('doctor-select-form');
  const doctor = selectDoctor.options[selectDoctor.selectedIndex].value;
  if(removeForm.length === 1) {
    removeForm[0].remove();
  }
  switch (doctor) {
    case 'Cardio':

      const cardioForm = new CardioForm('POST', '','doctor-select-form');
      cardioForm.render(document.getElementById('visit-modal'));

      break;
    case 'Dantist':
      const dantistForm = new DantistForm('POST', '','doctor-select-form');
      dantistForm.render(document.getElementById('visit-modal'));
      break;
    case 'Therapist':
      const therapistForm = new TherapistForm('POST', '','doctor-select-form');
      therapistForm.render(document.getElementById('visit-modal'));
      break;
  }
});


// let select = new Select('add', 'select-doctors',  '-select doctor-', 'Cardio', 'Dantist', 'Therapist');
// select.render(document.getElementById('visit-modal'));
//
// const selectDoctor = document.getElementById('select-doctors');
// selectDoctor.addEventListener('change', function () {
//
//         // let cardioForm = '';
//   const removeForm = document.getElementsByClassName('doctor-select-form');
//   const doctor = selectDoctor.options[selectDoctor.selectedIndex].value;
//   if(removeForm.length === 1) {
//       removeForm[0].remove();
//   }
//     switch (doctor) {
//       case 'Cardio':
//         const cardioForm = new CardioForm('POST', '','doctor-select-form');
//         cardioForm.render(document.getElementById('visit-modal'));
//         break;
//       case 'Dantist':
//         const dantistForm = new DantistForm('POST', '','doctor-select-form');
//         dantistForm.render(document.getElementById('visit-modal'));
//         break;
//       case 'Therapist':
//         const therapistForm = new TherapistForm('POST', '','doctor-select-form');
//         therapistForm.render(document.getElementById('visit-modal'));
//         break;
//     }
// });

const visitArr = [];