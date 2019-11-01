class Form {
  constructor(action = '', id = '', ...classArr){
    this._action = action;
    this._id = id;
    this._classArr = classArr;
    this._form = null;
  }

  render(container) {
    this._form = document.createElement("form");
    this._form.id = this._id;
    this._form.className = this._classArr.join(" ");
    this._form.action = this._action;
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data =  this.serialize();
      if (this._form.id === 'login-form') {
        this.authorise(data).then(response => {
          this.getCards(response);
        })
      }
          const selectedDoctor = this._form.previousElementSibling.value;
          if (e.target.className.includes('doctor-select-form')) {
            if (selectedDoctor === 'Cardio') {
              const visitCardio = new VisitCardio(data);
              visitCardio.render(document.querySelector('.cards-desk'));
              // this._requestCards(data);
            } else if (selectedDoctor === 'Dantist') {
              const visitDentist = new VisitDentist(data);
              visitDentist.render(document.querySelector('.cards-desk'));
              // this._requestCards(data);
            } else if (selectedDoctor === 'Therapist') {
              const visitTherapist = new VisitTherapist(data);
              visitTherapist.render(document.querySelector('.cards-desk'));
              // this._requestCards(data);
            }
            this._form.closest(".modal-overlay").classList.add('is-hidden');
          }
    });
    container.appendChild(this._form);
  }

  serialize() {
    const inputs = this._form.querySelectorAll("input:not([type='submit']), select ");
    const arr = [...inputs].filter(item => item.value);
    const obj = {};
    arr.forEach(input => {
      obj[input.name] = input.value;
    });
    return obj;
  }

  authorise(data) {
    return new Promise((resolve, reject) => {
      axios.post('login', data, {})
          .then((response) => {
            localStorage.setItem('token', JSON.stringify(response.data.token));
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + (JSON.parse(localStorage.getItem('token')));
            const headerLoginBtn = document.querySelector('.login-btn');
            headerLoginBtn.innerText = 'Create';
            resolve(response.data.token);
          })
          .catch((error) => {
            reject(error);
          });
    })
  }

  getCards() {
    axios.get('cards')
        .then((response) => {
          console.log((response.data));
          // ТУТ ПОЯВЛЯЕТСЯ МАССИВ С ОБЪЕКТАМИ- КАРТОЧКАМИ КОТОРЫЕ НАДО ВЫВОДИТЬ
        })
        .catch((error) => {
          console.log(error);
        });
  }
}

class CardioForm extends Form {
  constructor (...args) {
    super(...args);
  }
  render(container) {
    super.render(container);
    const visitPurpose = new Input('text', 'Enter purpose of visit', 'visit-purpose', '', '', '', 'form-control', 'my-2');
    const description = new Input('text', 'Description', 'description', '', '', '', 'form-control', 'my-2');
    const selectCardio = new Select('cardio-select', '', 'Ivanov', 'Petrov', 'Sidorov');
    const selectPriority = new Select('priority-select', '', 'Low', 'Medium', 'High');
    const bloodPressure = new Input ('text', 'Pressure', 'pressure', '', '', '', 'form-control', 'my-2');
    const weightIndex = new Input('number', 'Index', 'weight-index', '', '', '', 'form-control', 'my-2');
    const diseases = new Input('','Diseases', 'diseases', '', '', '', 'form-control', 'my-2');
    const age = new Input('number','Age', 'age', '', '', '', 'form-control', 'my-2');
    const fullName = new Input('','Full name', 'full-name', '', '', '', 'form-control', 'my-2');
    const cardSubmit = new Input('submit','',  '', 'Отправить', 'id-cardio', '', 'btn', 'btn-primary');

    visitPurpose.render(this._form);
    description.render(this._form);
    selectCardio.render(this._form);
    selectPriority.render(this._form);
    bloodPressure.render(this._form);
    weightIndex.render(this._form);
    diseases.render(this._form);
    age.render(this._form);
    fullName.render(this._form);
    cardSubmit.render(this._form);
  }
}

class DantistForm extends Form {
  constructor (...args) {
    super(...args);
  }
  render(container) {
    super.render(container);
    const visitPurpose = new Input('', 'Enter purpose of visit', 'visit-purpose', '', '', '', 'form-control', 'my-2');
    const description = new Input('text', 'Description', 'description', '', '', '', 'form-control', 'my-2');
    const selectDantist = new Select('dantist-select', '', 'Kurochkin', 'Ytkin', 'Petuh');
    const selectPriority = new Select('priority-select', '', 'Low', 'Medium', 'High');
    const date = new Input('date', 'date', 'date', '', '', '', 'form-control', 'my-2');
    const fullName = new Input('','Full name', 'full-name', '', '', '', 'form-control', 'my-2');
    const cardSubmit = new Input('submit', '', '', 'Отправить', '', '', 'btn', 'btn-primary');

    visitPurpose.render(this._form);
    description.render(this._form);
    selectDantist.render(this._form);
    selectPriority.render(this._form);
    date.render(this._form);
    fullName.render(this._form);
    cardSubmit.render(this._form);
  }
}

class TherapistForm extends Form {
  constructor (...args) {
    super(...args);
  }
  render(container) {
    super.render(container);
    const visitPurpose = new Input('', 'Enter purpose of visit', 'visit-purpose', '', '', '', 'form-control', 'my-2');
    const description = new Input('', 'Description', 'description', '', '', '', 'form-control', 'my-2');
    const selectTherapist = new Select('therapist-select', '', 'Monatik', 'Maruv', 'Loboda');
    const selectPriority = new Select('priority-select', '', 'Low', 'Medium', 'High');
    const age = new Input('number','Age', 'age', '', '', '', 'form-control', 'my-2');
    const fullName = new Input('','Full name', 'full-name', '', '', '', 'form-control', 'my-2');
    const cardSubmit = new Input('submit', '', '', 'Отправить', '', '', 'btn', 'btn-primary');

    visitPurpose.render(this._form);
    description.render(this._form);
    selectTherapist.render(this._form);
    selectPriority.render(this._form);
    age.render(this._form);
    fullName.render(this._form);
    cardSubmit.render(this._form);
  }
}
