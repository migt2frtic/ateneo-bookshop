import { LitElement, html } from 'lit-element';
import { material } from '../utils/fonts';
import { styles } from '../utils/login-style';
import '../components/common-header';
import { navigatorStyles } from '../utils/custom-styles';


class LogInView extends LitElement {
  static get styles() {
    return [material, styles,navigatorStyles];;
  }
renderIngreso(){
  return html`
  <section aria-label="Login or register" tabindex="0">
        <h2 class="section-title centered">INGRESA O <span class="section-title-decorator">REGISTRATE</span></h2>
        <div class="technologies ">
          <div class="tech-card " aria-label="Login" tabindex="0">
          <h3>¿YA ESTÁS REGISTRADO?</h3>
          <div class="input-field col s12">
                    <label for="text">Nombre de usuario</label>
                        <input class="validate" type="text" name="usr" id="usuarioLogin" />
                    </div>
          <div class="input-field col s12">
          <label for="password">contraseña</label>
                        <input class="validate" type="password" name="pass" id="passwordLogin" />
                        
                    </div>   
                    <label style="float: right;">
                        <a class="pink-text" href=""><b>¿Has olvidado tu contraseña?</b></a>
                    </label>
                    <div class="row">
                        <button onclick="comprobarDatos()" class="col s12 btn btn-large waves-effect teal darken-1">Iniciar Sesión</button>
                    </div>      
            <hr class="separator sm red" />
          </div>
          <div class="tech-card" aria-label="CSS3" tabindex="0">
            <h3>¡ÚNETE A NOSOTROS Y RECIBIRÁS DESCUENTOS, PROMOCIONES Y LOS MEJORES PRECIOS!</h3>
            <a class="btn teal darken-1" onclick="registrarse()">Create una cuenta</a>
            <hr class="separator sm blue" />
          </div>
        
        </div>
        <nav>
        <ul class="menu-list">
        <li><a href="/">Volver</a></li>
        </ul>
      </nav>
      </section>
      `;
  }

  render() {
    return html`
      <common-header></common-header>
     <main>
     ${this.renderIngreso()}
     </main>
    `;
  }
}

window.customElements.define('login-view', LogInView);
