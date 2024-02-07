class MenuToggle {
  constructor(nav, icon) {
    this.nav = nav;
    this.icon = icon;
    this.init();
  }

  init = () => {
    this.icon.addEventListener('click', this.toggle)
  }

  toggle = () => {
    this.nav.classList.toggle('active');
  }
}

const action = new MenuToggle(document.querySelector('#nav'), document.querySelector('#icon'));