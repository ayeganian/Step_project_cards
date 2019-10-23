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
const modal = new Modal(document.querySelector('.modal-overlay'));
window.openModal = modal.open.bind(modal);
window.openModal();









// class Modal {
//   constructor() {
//     this._modal = null;
//     this._block = null;
//   }
//   initModal(width, html) {
//     this._modal = document.createElement('div');
//     this._modal.id = 'modal';
//     this._modal.innerHTML = html
//   };
//   initBlock() {
//     this._block = document.createElement('div');
//     this._block.id = 'blockscreen';
//     document.getElementsByClassName('body');
//     const parent = document.getElementsByTagName('body')[0];
//     const obj = parent.firstChild;
//     parent.insertBefore(this._block, obj);
//     this._block.addEventListener('click', this.close())
//
//   }
//   close() {
//     document.getElementById('blockscreen').style.display = 'none';
//     document.getElementById('modal').style.display = 'none';
//   }
//   show() {
//     this.initModal()
//     this.initBlock();
//   }
// }
