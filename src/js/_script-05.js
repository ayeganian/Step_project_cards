const modal = new Modal(document.getElementById('login-modal'));
document.querySelector('.login-btn').openModal = modal.open.bind(modal);


const loginForm = new Form('GET', 'login-form', 'login-wrapper');
loginForm.render(document.getElementById('modal'));

const emailInput = new Input('email', 'Enter your email', 'mail' , 'annettt@gmail.com');
emailInput.render(document.getElementById('login-form'));

const passwordInput = new Input('password', 'Enter your password', 'password' ,'123456');
passwordInput.render(document.getElementById('login-form'));

const submitInput = new Input('submit', '','' , 'Login');
// submitInput.value = 'Check me'
submitInput.render(document.getElementById('login-form'));
//
// const visit = new Visit(data);
// visit.render(document.querySelector('.cards-desk'));

  const modalCard = new Modal(document.getElementById('add-card-modal'));
const addCardBtn = document.querySelector('.add-card-btn');
addCardBtn.openModal = modalCard.open.bind(modalCard);

const formCard = new Form("POST", 'visit-modal', 'class-cardio');
formCard.render(document.querySelector('#card-modal'));

const select = new Select('add', 'select-doctors',  '-select doctor-', 'Cardio', 'Dantist', 'Therapist');

// const titleCard = new Input('text', 'title', 'title');
// const patientName = new Input('text', 'patient name', 'name');
// const description = new Input('text', 'Description', 'description');
// const status = new Input('text', 'Status', 'status');
// const priority = new Input('text', 'Priority', 'priority');
// const cardSubmit = new Input('submit', '', '', 'Отправить');


select.render(document.getElementById('visit-modal'));
let selectDoctor = document.getElementById('select-doctors');
selectDoctor.addEventListener('change', function () {
  const removeForm = document.getElementsByClassName('doctor-select-form');
  const doctor = selectDoctor.options[selectDoctor.selectedIndex].value;
  if(removeForm.length === 1) {
      removeForm[0].remove();
  } else {
    // if (doctor === 'Cardio') {
    //   const cardioForm = new CardioForm('POST', 'id2','cardio-form');
    //   cardioForm.render(document.getElementById('visit-modal'))
    // }
    switch (doctor) {
      case 'Cardio':
        const cardioForm = new CardioForm('POST', '','doctor-select-form');
        cardioForm.render(document.getElementById('visit-modal'))
        break;
      case 'Dantist':
        const dantistForm = new CardioForm('POST', '','doctor-select-form');
        cardioForm.render(document.getElementById('visit-modal'))
        break;
      case 'Therapist':
        const therapistForm = new CardioForm('POST', '','doctor-select-form');
        cardioForm.render(document.getElementById('visit-modal'))
        break;
    }

  }

});
// titleCard.render(document.getElementById('visit-modal'));
// patientName.render(document.getElementById('visit-modal'));
// description.render(document.getElementById('visit-modal'));
// status.render(document.getElementById('visit-modal'));
// priority.render(document.getElementById('visit-modal'));
// cardSubmit.render(document.getElementById('visit-modal'));






