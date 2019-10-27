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

const formCard = new Form("POST", 'visit-modal');
formCard.render(document.querySelector('#card-modal'));

const titleCard = new Input('text', 'title', 'title');
const patientName = new Input('text', 'patient name', 'name');
const description = new Input('text', 'Description', 'description');
const status = new Input('text', 'Status', 'status');
const priority = new Input('text', 'Priority', 'priority');
const cardSubmit = new Input('submit', '', '', 'Отправить');


titleCard.render(document.getElementById('visit-modal'));
patientName.render(document.getElementById('visit-modal'));
description.render(document.getElementById('visit-modal'));
status.render(document.getElementById('visit-modal'));
priority.render(document.getElementById('visit-modal'));
cardSubmit.render(document.getElementById('visit-modal'));






