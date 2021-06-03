import { LitElement, html } from 'lit-element';
import { navigatorStyles, commonStyles, registerStyles } from '../utils/custom-styles';
import '../components/common-header';

class RegistroView extends LitElement {
  static get styles() {
    return [
      navigatorStyles,
      commonStyles, registerStyles
    ];
  }

  render() {
    return html`
      <common-header></common-header>
      <div class="form">
    <form onSubmit={submitHandler} >
      <ul class="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          <label htmlFor="name">
            Nombre
          </label>
          <input type="name" name="name" id="name" onChange={(e) =>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => 
          </input>
        </li>
        <li>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" onChange={(e) => 
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Repita contraseña</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => 
          </input>
        </li>
        <li>
          <button type="submit" class="button primary">Registro</button>
        </li>
        <li>
          Ya tiene cuenta??
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} class="button secondary text-center" >Crea tu cuenta</Link>

        </li>

      </ul>
    </form>
  </div>
`;
  }
}

window.customElements.define('register-view', RegistroView);
