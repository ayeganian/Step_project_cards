$('.carousel').carousel();

$('#counter-btn').click(function (e) {
  e.preventDefault();
  $('.counter-value').each(function () {
    $(this).prop('Counter', 0).animate({
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

// Drag’n’Drop

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.id)
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  this.appendChild(document.getElementById(data));
}

const listItem = document.querySelectorAll('.drag-card');
listItem.forEach(item => {
  item.addEventListener('dragstart', drag)
});

const container = document.getElementById("container");
container.addEventListener("drop", drop);
container.addEventListener("dragover", allowDrop);
