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

/*function allowDrop(e) {
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
container.addEventListener("dragover", allowDrop);*/

// <ul class="case-list drop-container">
//     <li id="case1" draggable="true">Item 1</li>
// <li id="case2" draggable="true">Item 2</li>
// <li id="case3" draggable="true">Item 3</li>
// <li id="case4" draggable="true">Item 4</li>
// </ul>
// <ul id="in-progress" class="drop-container"></ul>
//     <ul id="finish" class="drop-container"></ul>
//     <!--Создайте аналог Trello - список дел в одной колонке, и рядом две пустые -->
//     </body>


//     function allowDrop(e) {
//       e.preventDefault();
//     }
//
// function drag(e) {
//   e.dataTransfer.setData('text', e.target.id)
// }
//
// function drop(e) {
//   e.preventDefault();
//   const data = e.dataTransfer.getData('text');
//   this.appendChild(document.getElementById(data));
// }
//
// const listItem = document.querySelectorAll('.items div');
//     //drag-card
// listItem.forEach(item => {
//   item.addEventListener('dragstart', drag)
// });
//
// const table = document.getElementsByClassName('drop-container');
// for (let i = 0; i < table.length; i++) {
//   table[i].addEventListener('dragover', allowDrop);
//   table[i].addEventListener('drop', drop);
// };
