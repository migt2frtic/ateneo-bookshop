import { LitElement, html } from 'lit-element';
import { material } from '../utils/fonts';
import { styles } from '../utils/home-styles.js';

class FooterView extends LitElement {
    static get styles() {
      return [material, styles];
    }
  
renderFooter() {
    return html`
      <footer aria-label="Footer section" tabindex="0">
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Menu links" tabindex="0">SOBRE NOSOTRAS</li>
          <li><a href="#" class="footer-link">Biografia</a></li>
          
        </ul>
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Technologies links" tabindex="0">TEGNOLOGÍAS</li>
          <li><a href="#" class="footer-link">HTML5</a></li>
          <li><a href="#" class="footer-link">CSS3</a></li>
          <li><a href="#" class="footer-link">Javascript</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Dependencies links" tabindex="0">DEPENDECIAS</li>
          <li><a href="#" class="footer-link">LitElement</a></li>
          <li><a href="#" class="footer-link">Node Modules</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Recomendations links" tabindex="0">RELACIONADOS</li>
          <li><a href="#" class="footer-link">Git</a></li>
          <li><a href="#" class="footer-link">ES6</a></li>
          <li><a href="#" class="footer-link">Web Components</a></li>
          <li><a href="#" class="footer-link">Npm</a></li>
        </ul>
        <div class="footer-line" aria-label="Website links" tabindex="0">
          <a href="#" class="footer-link">AteneoBooks.site</a>
        </div>
      </footer>
    `;
  }
  render() {
    return html`
${this.renderFooter()}
`;
  }
}
  window.customElements.define('common-footer', FooterView);

