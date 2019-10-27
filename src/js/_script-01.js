const data = {
  email: "annettt@gmail.com",
  password: "123456"
};
const authOptions = {
  method: 'POST',
  url: 'http://cards.danit.com.ua/login',
  data: JSON.stringify(data),
};

axios(authOptions)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

//        axios.post("/login", data).then(response => console.log(response))




class Modal {
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.button-close')
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

class Visit {
  constructor(data) {
    this._card = null;
    this._title = data.title;
    this._name = patientName;
    this._description = description;
    this._status = 'open';
    this._priority = priority;
  }

  render(wrapper) {
    this._card = document.createElement("div");

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    wrapper.append(this._card);
    this._card.append(cardContent);
    this._card.addEventListener('click', (event) => {
      // находим объект в массиве объектов и меняем ему статус
      if (event.target.classList.contains("btn")) {
        this.updateStatus(event.target.dataset.status);
      }
    })
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