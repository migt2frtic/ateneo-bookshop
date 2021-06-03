import { LitElement, html } from 'lit-element';
import { material } from '../utils/fonts';
import { styles } from '../utils/home-styles.js';


import '../components/common-header';
import '../components/common-footer'

class HomeView extends LitElement {
  static get styles() {
    return [material, styles];
  }


  renderMainSection() {
    return html`
     <section aria-label="Bienvenida" tabindex="0">
     <div class="hall"> 
          <img class="libreria" src="assets/images/libreria.png">
          <div class="caption center-align">
					<h3>¡Bienvenido a Ateneo!</h3>
        </div>
        
      </section>
    `;
  }

  renderMasVendidos() {
    return html`
      <section aria-label="Libros más vendidos" tabindex="0">
        <h2 class="section-title centered">Más <span class="section-title-decorator">vendidos</span></h2>
        <div class="technologies">
      
        </div>
      </section>
    `;
  }

  rendernNovedades() {
    return html`
      <section aria-label="Novedades" tabindex="0">
            <h2 class="section-title centered">Novedades</h2>
            
          
          <hr class="separator sm green" />
          
          <hr class="separator centered" />
      </section>
    `;
  }

  renderRecomendaciones() {
    return html`
      <section aria-label="Web design disciplines" tabindex="0">
        <h2 class="section-title centered">Recomendaciones</h2>
        </div>
      </section>
    `;
  }

  render() {
    return html`
      <common-header></common-header>
      <main>
        ${this.renderMainSection()} ${this.renderMasVendidos()} ${this.rendernNovedades()} ${this.renderRecomendaciones()}
       
        <button aria-label="Scroll to top" class="scrolltop-arrow" @click="${this.scrollToTop}"> 
        
          <i class="material-icons">arrow_upward</i>
        </button>
      </main>
      <common-footer></common-footer>
    `;
  }
}

window.customElements.define('home-view', HomeView);
