class Form {
    constructor(action = '', id = '', ...classArr){
        this._action = action;
        this._id = id;
        this._classArr = classArr;
        this._form = null;
    }
    // setType(newAction) {
    //     const actions = ['POST', 'GET', 'DELETE', 'PULL'];
    //     if (actions.includes(newAction)) {
    //         this._action = newAction;
    //     } else {
    //         return false;
    //     }
    // };
    render(container) {
        this._form = document.createElement("form");
        this._form.id = this._id;
        this._form.className = this._classArr.join(" ");
        this._form.action = this._action;
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();

            const data =  this.serialize();
            console.log(data);

                this._form.closest(".modal-overlay").classList.add('is-hidden');
            // if (e.target.id === 'visit-modal') {
            //     let test = document.getElementById('select-doctors');
            //     // console.log(test);
            //     // console.log(e.target.id);
            //     const visit = new Visit(data);
            //     // console.log(visit);
            // visit.render(document.querySelector('.cards-desk'))
            //
            // }

            // const visit = new Visit("fggh", 'efgg', 'adf', 'eggrg', 'wegw');
            // debugger;
            // console.log(data);
            // console.log(this.serialize(visit));
        });

            container.appendChild(this._form);
    }
    serialize() {
        const inputs = this._form.querySelectorAll("input:not([type='submit'])");
        const arr = [...inputs].filter(item => item.value);
        console.log(arr);
        const obj = {};
        arr.forEach(input => {
            obj[input.name] = input.value;
            });
        return obj;
    }
}

class CardioForm extends Form {
    constructor (...args) {
        super(...args);
    }
    render(container) {
        super.render(container);
        const visitPurpose = new Input('', 'Enter purpose of visit', 'visit-purpose');
        const description = new Input('text', 'Description', 'description');
        const selectCardio = new Select('cardio-select', '', '-select doctors=', 'Ivanov', 'Petrov', 'Sidorov');
        const selectPriority = new Select('priority-select', '', 'Low', 'Medium', 'High');
        const bloodPressure = new Input ('text', 'Pressure', 'pressure');
        const weightIndex = new Input('number', 'Index', 'weight-index');
        const diseases = new Input('','Diseases', 'diseases');
        const age = new Input('number','Age', 'age');
        const fullName = new Input('','Full name', 'full-name');
        const cardSubmit = new Input('submit', '', '', 'Отправить');
        const visitPurpose = new Input('text', 'Enter purpose of visit', 'visit-purpose', '', '', 'form-control', 'my-2');
        const description = new Input('text', 'Description', 'description', '', '', 'form-control', 'my-2');
        const selectCardio = new Select('cardio-select', '', 'Ivanov', 'Petrov', 'Sidorov', 'form-control', 'my-2');
        const selectPriority = new Select('priority-select', '', 'Low', 'Medium', 'High', '', '', 'form-control', 'my-2');
        const bloodPressure = new Input ('text', 'Pressure', 'pressure', '', '', 'form-control', 'my-2');
        const weightIndex = new Input('number', 'Index', 'weight-index', '', '', 'form-control', 'my-2');
        const diseases = new Input('','Diseases', 'diseases', '', '', 'form-control', 'my-2');
        const age = new Input('number','Age', 'age', '', '', 'form-control', 'my-2');
        const fullName = new Input('','Full name', 'full-name', '', '', 'form-control', 'my-2');

        // const titleCard = new Input('text', 'title', 'title');
        // const patientName = new Input('text', 'patient name', 'name');
        // const status = new Input('text', 'Status', 'status');
        // const priority = new Input('text', 'Priority', 'priority');
        const cardSubmit = new Input('submit', '', '', 'Отправить', '', 'btn', 'btn-primary');

        visitPurpose.render(this._form);
        description.render(this._form);
        selectCardio.render(this._form);
        selectPriority.render(this._form);
        bloodPressure.render(this._form);
        weightIndex.render(this._form);
        diseases.render(this._form);
        age.render(this._form);
        fullName.render(this._form);

        // titleCard.render(this._form);
        // patientName.render(this._form);
        // status.render(this._form);
        // priority.render(this._form);
        cardSubmit.render(this._form);
    }
}

class DantistForm extends Form {
    constructor (...args) {
        super(...args);
    }
    render(container) {
        super.render(container);
        const visitPurpose = new Input('', 'Enter purpose of visit', 'visit-purpose');
        const description = new Input('text', 'Description', 'description');
        const selectDantist = new Select('dantist-select', '','-select doctors=', 'Kurochkin', 'Ytkin', 'Petuh');
        const selectPriority = new Select('priority-select', '', 'Low', 'Medium', 'High');
        const date = new Input('date', 'date', 'date');
        const fullName = new Input('','Full name', 'full-name');
        const cardSubmit = new Input('submit', '', '', 'Отправить');

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
        const visitPurpose = new Input('', 'Enter purpose of visit', 'visit-purpose');
        const description = new Input('', 'Description', 'description');
        const selectTherapist = new Select('therapist-select', '','-select doctors=', 'Monatik', 'Maruv', 'Loboda');
        const selectPriority = new Select('priority-select', '', 'Low', 'Medium', 'High');
        const age = new Input('number','Age', 'age');
        const fullName = new Input('','Full name', 'full-name');
        const cardSubmit = new Input('submit', '', '', 'Отправить');

        visitPurpose.render(this._form);
        description.render(this._form);
        selectTherapist.render(this._form);
        selectPriority.render(this._form);
        age.render(this._form);
        fullName.render(this._form);
        cardSubmit.render(this._form);
    }
}
