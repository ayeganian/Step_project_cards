class Input {
  constructor(type = 'text', placeholder = '', id = '', ...classArr){
    this._type = type;
    this._placeholder = placeholder;
    this._id = id;
    this._classArr = classArr;
  }
  setType(newType) {
    const types = ['text', 'email', 'number', 'phone', 'password'];
    if (types.includes(newType)) {
      this._type = newType;
    } else {
      return false;
    }
  };
  render(container) {
    const input = document.createElement("input");
    input.id = this._id;
    input.className = this._classArr.join(" ");
    input.placeholder = this._placeholder;
    input.type = this._type;
    container.append(input);
  }
}
const phoneInput = new Input('text', 'Введите номер телефона', "input");
const form = document.getElementById('form');
phoneInput.render(form)