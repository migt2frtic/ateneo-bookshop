import { LitElement, html } from 'lit-element';
import { navList } from '../utils/constants';
import { material } from '../utils/fonts';
import { styles } from '../utils/commonh-styles';


class CommonHeader extends LitElement {
  static get styles() {
    return   [material, styles];
  }
  constructor() {
    super();

    window.addEventListener('scroll', () => {
      const arrowBtn = this.shadowRoot.querySelector('.scrolltop-arrow');
      const scrollMenu = this.shadowRoot.querySelector('.scroll-menu');

      arrowBtn.style.opacity = window.scrollY > window.innerHeight ? '1' : '0';
      scrollMenu.style.top = window.scrollY > 170 ? '0' : '-70px';
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  mobileMenuSwitch() {
    const menu = this.shadowRoot.querySelector('.nav-list').classList;
    const menuIcon = this.shadowRoot.querySelector('.menu-icon').classList;
    const menuButton = this.shadowRoot.querySelector('.menu-btn');
    const isClosed = !menu.contains('opened');

    menuButton.disabled = true;

    if (isClosed) {
      menu.add('opened');
      menuIcon.add('rotate');
    } else {
      menu.remove('opened');
      menu.add('closed');
      menuIcon.remove('rotate');
    }

    setTimeout(() => {
      menuButton.disabled = false;
      if (!isClosed) menu.remove('closed');
    }, 1000);
  }

  renderNavigator() {
    return html`
      <nav>
        <ul class="nav-list">
          ${navList.map((info) => html`<li><a href="${info.path}" class="nav-link">${info.name}</a></li>`)}
        </ul>
        <div class="scroll-menu">
          <img class="logo" src="assets/images/ateneo2.png" alt="logo" />
          <ul class="nav-list">
            ${navList.map(
              (info) => html`<li><a href="${info.path}" class="nav-link fixed" tabindex="-1">${info.name}</a></li>`,
            )}
          </ul>
          <button type="button" class="scroll-menu-btn">
            <i class="material-icons scroll-menu-icon">Menu</i>
          </button>
        </div>
        <button type="button" class="menu-btn" @click="${this.mobileMenuSwitch}">
          <i class="material-icons menu-icon">Menu</i>
        </button>
      </nav>
    `;
  }
  render() {
    return html`
      <header>
      <img class="logo" src="/assets/images/ateneo2.png">
      </header>
      ${this.renderNavigator()}
      <main>
        <button aria-label="Scroll to top" class="scrolltop-arrow" @click="${this.scrollToTop}">
          <i class="material-icons">arrow_upward</i>
        </button></main>
    `;
  }
}

window.customElements.define('common-header', CommonHeader);
