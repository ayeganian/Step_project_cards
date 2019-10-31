
class Modal {
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.button-close');
    closeButton.addEventListener('click', this.close.bind(this));
    overlay.addEventListener('click', e => {
      if (e.id === this.overlay.id) {
        this.close();
      }
    });
  }

  close() {
    this.overlay.classList.add('is-hidden');
  }

  open() {
    this.overlay.classList.remove('is-hidden');
  }

}

class Select {
  constructor(name, id, ...value) {
    this._name = name;
    this._id = id;
    this._value = value;
  }

  render(wrapper) {
    const select = document.createElement('select');
    select.id = this._id;
    select.setAttribute('name', this._name);
    this._value.forEach((item, i) => {
      const option = document.createElement('option');
      option.setAttribute('value', item);
      option.innerText = item;
      select.append(option)
    });

    wrapper.appendChild(select)
  }
}


class Visit {
  constructor(data) {
    this._card = null;
    this._visit = data['visit-purpose'];
    this._description = data.description;
    this._priority = data['priority-select'];
    this._fullName = data['full-name'];
  }

  render(wrapper) {
    this._card = document.createElement("div");
    this._card.classList.add("drag-card" ,"medical-card","card", "border-primary", "m-3");
    // this._card.createAttribute('draggable', 'true');
    //нужно добавить уникальный айди карты
    // this._card.id = ;
    this._card.innerHTML = `<div class="card-body bg-dark text-white text-center">
       <h3 class="card-title">${this._fullName}</h3>
       <h5 class="card-title"><img class="card-logo mr-2" src="/img/icon.png" alt="icon">${this._fullName}</h5>
       <div class="additional-info hidden"></div>
       <button class="show-more btn btn-success m-2">Показать больше.</button>
       <button class="update btn btn-primary m-2" onclick="openModal()">Редактировать</button>
     </div>`;
    wrapper.append(this._card);
  }

  updateStatus(status) {
    this._card.classList.remove(`${this._status}-card`);
    this._status = status;
    this._card.classList.add(`${this._status}-card`);
  }

  visitEdit() {
    const newForm = new Form(this._card._id, ...args);
  }
}

class VisitCardio extends Visit {
  constructor(data, ...classArr) {
    super(data);
    this._doctor = data['cardio-select'];
    this._pressure = data['pressure'];
    this._weightIndex = data['weight-index'];
    this._diseases = data['diseases'];
    this._age = data['age'];
    this._class = classArr;
  }

  render(wrapper) {
    super.render(wrapper);
    console.log(this._card);
    const modalVisitUpdate = new Modal(document.getElementById('update-card-modal'));
    this._card.addEventListener('click', (event) => {
      if (event.target.classList.contains("show-more")) {
        const info = document.querySelector('.additional-info');
        info.innerHTML = `<div>${this._doctor}</div>
                      <div>${this._pressure}</div>
                       <div>${this._weightIndex}</div>
                       <div>${this._diseases}</div>
                       <div>${this._age}</div>
`

      } else if (event.target.classList.contains("update")) {
        console.log(modalVisitUpdate);
        document.querySelector('.update').openModal = modalVisitUpdate.open.bind(modalVisitUpdate);


      }
    })
  }

}

class VisitDentist extends Visit {
  constructor(data) {
    super(data);
    this._doctor = data['dantist-select'];
    this._date = data['date'];
  }
}

class VisitTherapist extends Visit {
  constructor(data) {
    super(data);
    this._doctor = data['therapist-select'];
    this._age = data['age'];
  }
}
