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
      <div class="panel-formulario">
        <div class="panel">
          <h3 class="subtitulo-formulario">Únete a nosotros</h3>
          <div class="panel">
            <div class="editor-label">
              <label for="Nombre">Nombre</label>
            </div>
            <div class="editor-field ancho-completo">
              <input data-val="true" data-val-required="*" id="Nombre" name="Nombre" placeholder="Nombre" type="text"
                value="">
              <span class="field-validation-valid" data-valmsg-for="Nombre" data-valmsg-replace="true"></span>
            </div>
      
            <div class="editor-label">
              <label for="Apellidos">Apellidos</label>
            </div>
      
            <div class="editor-field ancho-completo">
              <input data-val="true" data-val-required="*" id="Apellidos" name="Apellidos" placeholder="Apellidos" type="text"
                value="">
              <span class="field-validation-valid" data-valmsg-for="Apellidos" data-valmsg-replace="true"></span>
            </div>
      
            <div class="editor-label label-telefono">
              <label for="Telefono">Teléfono</label>
            </div>
      
            <div class="editor-field editor-telefono ancho-completo">
              <input data-val="true" data-val-required="*" id="Telefono" name="Telefono" placeholder="Teléfono" type="text"
                value="">
              <span class="field-validation-valid" data-valmsg-for="Telefono" data-valmsg-replace="true"></span>
            </div>
      
            <div class="editor-label">
              <label for="Mail">Correo electrónico</label>
            </div>
      
            <div class="editor-field ancho-completo">
              <input data-val="true" data-val-email="*" data-val-remote="*" data-val-remote-additionalfields="*.Mail"
                data-val-remote-type="POST" data-val-remote-url="/cuenta/comprobardisponibilidadmail" data-val-required="*"
                id="Mail" name="Mail" placeholder="Correo electrónico" type="email" value="">
              <span class="field-validation-valid" data-valmsg-for="Mail" data-valmsg-replace="true"></span>
            </div>
      
            <div class="editor-label">
              <label for="Clave">Contraseña</label>
            </div>
      
            <div class="editor-field ancho-completo">
              <input data-val="true" data-val-required="*" id="Clave" name="Clave" placeholder="Contraseña" type="password">
              <span class="field-validation-valid" data-valmsg-for="Clave" data-valmsg-replace="true"></span>
            </div>
      
            <div class="editor-label">
              <label for="RepetirClave">Repetir contraseña</label>
            </div>
      
            <div class="editor-field ancho-completo">
              <input data-val="true" data-val-required="*" id="RepetirClave" name="RepetirClave"
                placeholder="Repetir contraseña" type="password">
              <span class="field-validation-valid" data-valmsg-for="RepetirClave" data-valmsg-replace="true"></span>
            </div>
      
      
            <br>
      
            <div class="editor-label label-nacimiento ocultar">
              <label for="Nacimiento">Fecha de nacimiento</label>
            </div>
            <div class="editor-field editor-nacimiento ancho-micro ocultar">
              <input id="fecha-nacimiento" type="text" class="hasDatepicker">
            </div>
            </fieldset>
      
            <br>
            <div class="botonera">
              <div class="boton-accion">
                <input id="enviar" type="submit" value="">
                <span>CREAR CUENTA</span>
              </div>
            </div>
            </form>
          </div>
      
      
        </div>
      </div>
`;
  }
}

window.customElements.define('register-view', RegistroView);
