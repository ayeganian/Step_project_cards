// const data = {
//   email: "annettt@gmail.com",
//   password: "123456"
// };
// const authOptions = {
//   method: 'POST',
//   url: 'http://cards.danit.com.ua/login',
//   data: JSON.stringify(data),
// };
//
// axios(authOptions)
//   .then(function(response) {
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

//        axios.post("/login", data).then(response => console.log(response))




class Modal {
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.button-close');
    closeButton.addEventListener('click', this.close.bind(this));
    overlay.addEventListener('click', e => {
      // if (e.srcElement.id === this.overlay.id) {
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
render(wrapper){
  const select = document.createElement('select');
  select.id = this._id;
  select.setAttribute('name', this._name);
  this._value.forEach((item, i) => {
    // console.log(i);
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
    this._status = 'open';
    this._visit = data['visit-purpose'];
    this._description = data.description;
    this._priority = data['priority-select'];
    this._fullName = data['full-name'];
    this._info = null;
  }

  render(wrapper) {
    this._card = document.createElement("div");
    this._card.innerHTML = `<div class="card-body bg-dark text-white text-center ">
       <h3 class="card-title">${this._fullName}</h3>
       <h5 class="card-title"><img class="card-logo mr-2" src="/img/icon.png" alt="icon">${this._fullName}</h5>
       <h5 class="testOne">${this._status}</h5>
       <div class="additional-info hidden"></div>
       <button class="show-more btn btn-success m-2">Показать больше</button>
       <button class="btn btn-primary m-2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownMenuButton" >Редактировать</button>
       <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item update-card" onclick="openModal()">Редактировать</button>
    <a class="dropdown-item delete-card" >Удалить</a>
    <a class="dropdown-item change-status" >Завершить</a>
  </div></div>`;
    // this._card.appendChild(buttons);
    wrapper.append(this._card);
    visitArr.push(this._card);
    console.log(visitArr);
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


    this._card.addEventListener('click', (event) => {
      if (event.target.classList.contains("show-more")) {
        const cardContent = this._card.querySelector('.additional-info');
        // console.log(cardContent);

        cardContent.innerHTML = `<div>${this._doctor}</div>
                      <div>${this._pressure}</div>
                       <div>${this._weightIndex}</div>
                       <div>${this._diseases}</div>
                       <div>${this._age}</div>`


 } else if (event.target.classList.contains("update-card")) {
        const updateBtn = this._card.querySelector('.update-card');
        const modalVisitUpdate = new Modal(document.getElementById('update-card-modal'));
        updateBtn.openModal = modalVisitUpdate.open.bind(modalVisitUpdate);
    // const cardioForm = new CardioForm('POST', '','doctor-select-form');
    // cardioForm.render(updateData);

  } else if (event.target.classList.contains("delete-card")) {
    this._card.remove();
      } else if (event.target.classList.contains("change-status")) {
        this._card.querySelector('.testOne').innerText = 'done';
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

// const visitTest = new Visit(data)

// static ConvertData(data) {
//
// }

// class VisitCardio extends Visit {
//   constructor(bloodPressure, ...args) {
//     super(...args);
//   }
//
//   render(container) {
//     super.render();
//     const contentContainer = this._card.querySelector(".card-content");
//     contentContainer.innerHTML = ``;
//     container.append(this._card);
//   }
//
//
// }
// const cardArr = [];
// const form = new Form("", ...rest);
// class Form {
//   constructor(){
//     this._id = (id) ? id : null;
//   }
//
//   render() {
//     this._form = document.createElement("form")
//     this._form.innerHTML = `<input type="hidden" name="id" value="${(this._id) ? `id` : ``}">`;;
//     this._form.addEventListener("submit", function() {
//       const data = this.serialize();
//       if(data.id) {
//         // PUT запрос
//         // const newVisit = new VisitCardio(Visit.convert(data));
//         // запихиваешь его на его старое в массиве
//       }
//       else {
//         // POST запрос -> {status: "Success", id: 3434}
//         if(response.data.status === "Success") {
//           newVisit = new VisitCardio(response.data.id, Visit.convert(data));
//         }
//       }
//     })
//
//     serialize() {
//       {
//         name: value
//       }
//     }
//
//     serializeJSON() {
//
//     }
//   }
// }
//
// const cardio = new VisitCardio(bloodPressure, title, fio, description, status, priority);
// [{
//   doctor: "cardio",
//   title: "gghfgfg",
// }]
//
// const container = document.getElementById("card-list");
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i].doctor === "Cardio") {
//     const card = new VisitCardio(arr[i].title, arr[i].description);
//     card.render(container);
//     cardArr.push(card);
//   }
//
// }