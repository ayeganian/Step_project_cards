class Form {
    constructor(action = '', id = '', ...classArr) {
        this._action = action;
        this._id = id;
        this._classArr = classArr;
    }

    setType(newAction) {
        const actions = ['POST', 'GET', 'DELETE', 'PULL'];
        if (actions.includes(newAction)) {
            this._action = newAction;
        } else {
            return false;
        }
    };

    render(container) {
        const form = document.createElement("form");
        form.id = this._id;
        form.className = this._classArr.join(" ");
        form.action = this._action;
        // container.append(form);
    }
}

const testForm = new Form('GET', 'testik');
const form1 = document.getElementById('test-form');
testForm.render(form1);


$('.carousel').carousel();

$('#counter-btn').click(  function(e){
    e.preventDefault();
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});






