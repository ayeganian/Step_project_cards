class Input {
  constructor(type = 'text', placeholder = '', name ='', value='', id = '', ...classArr){
    this._type = type;
    this._placeholder = placeholder;
    this._id = id;
    this._classArr = classArr;
    this._value = value;
    this._name = name;
  }
  // setType(newType, newValue) {
  //   const types = ['text', 'email', 'number', 'phone', 'password', 'submit'];
  //
  //   return types.includes(newType); {
  //     this._type = newType;
  //   } else if (types.includes(newType) === 'submit') {
  //     this._type.value = value;
  //   }
  //   else {
  //     return false;
  //   }
  // };
  render(container) {
    const input = document.createElement("input");
    input.id = this._id;
    input.className = this._classArr.join(" ");
    input.placeholder = this._placeholder;
    input.type = this._type;
    input.value = this._value;
    input.name = this._name;
    container.appendChild(input);
  }
}
// const phoneInput = new Input('text', 'Введите номер телефона', "input");
// const form = document.getElementById('form2');
// phoneInput.render(form)