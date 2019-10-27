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
            // const data = .serialize();
            const data =  this.serialize();
            // const values = data.map(item => item.value);
            console.log(data);
            const visit = new Visit(data);
            this._form.closest(".modal-overlay").classList.add('is-hidden');
            // const visit = new Visit("fggh", 'efgg', 'adf', 'eggrg', 'wegw');
            // debugger;
            // console.log(data);
            console.log(visit);
            // console.log(this.serialize(visit));
            visit.render(document.querySelector('.cards-desk'))
        })

            container.appendChild(this._form);
    }
    serialize() {
        const inputs = this._form.querySelectorAll("input");
        const arr = [...inputs].filter(item => item.value);
        const obj = {};
        const arrObj = arr.forEach(input => {
            obj[input.name] = input.value;
            });
        return obj;
    }


}
// const testForm = new Form('GET', 'testik');
// const form1 = document.getElementById('test-form');
// testForm.render(form1);