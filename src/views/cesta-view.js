import { LitElement, html } from 'lit-element';
import { navigatorStyles, commonStyles, headerStyles } from '../utils/custom-styles';
import { dateFormatter } from '../utils/functions';
import '../components/common-header';

class CestaView extends LitElement {
  static get styles() {
    return [
      navigatorStyles,
      commonStyles,
      headerStyles
    ];
  }


  render() {
    return html`
      <common-header></common-header>
      <nav>
        <header>
          <img class="logo" src="/assets/images/ateneo2.png">
          <li><a href="/">Volver</a></li>
        </header>
        <div class="contenedor">      
          <div class="contenido">
            <div class="contenedor-central mi-cesta">
              <ul class="componentes">
                <li>
                  <div id="panel-navegacion-pedido" class="panel-navegacion-pedido">
                    <ul class="lista-flotante">
                      <li id="solapa-paso-1" class="solapa-paso actual">
                        <h3>Mi cesta</h3>
                      </li>
                      <li id="solapa-paso-2" class="solapa-paso">
                        <h3>Envío</h3>
                      </li>
                      <li id="solapa-paso-3" class="solapa-paso">
                        <h3>Facturación</h3>
                      </li>
                      <li id="solapa-paso-4" class="solapa-paso">
                        <h3>Finalizar</h3>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div class="mensaje cesta importe-minimo">
                    El importe mínimo de compra para realizar un pedido es de 4,00 €
                  </div>
                </li>
                <li>
                  <div class="panel-tapiz panel-pedido">
                    <div class="detalles">
                      <ul class="productos-en-cesta">
                        <li class="fila titulo">
                          <h3>Aquí tienes tus productos seleccionados</h3>
                        </li>
                        <li class="fila totales">
                          <div>
                            <span class="valor">0,00 €</span>
                            <span class="titulo">Sub total:</span>
                          </div>
                        </li>
                        <li class="fila totales formas-envio fila-sin-datos">
                          <div>
                            <span class="valor">0,00 €</span>
                            <span class="titulo">Gastos de envío:</span>
                          </div>
                        </li>
                        <li class="fila totales formas-envio fila-sin-datos">
                          <div>
                            <span class="valor">0,00 €</span>
                            <span class="titulo">Recargos: </span>
                          </div>
                        </li>
                        <li class="fila totales total">
                          <div>
                            <span class="valor">0,00 €</span>
                            <span class="titulo">Total:</span>
                          </div>
                        </li>
                        <li class="fila informacion">
                          <div>
                            *Todos los precios tienen el porcentaje de IVA incluído <br> <br> **Importante: Para usar una
                            Tarjeta Regalo, pulsa el botón COMPRAR y ves hasta la sección denominada FACTURACIÓN
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="panel-contenedo-codigo-promocion">
                      <a class="enlace-codigo-promocion">¿Tienes un código promocional?</a>
                      <div class="panel-codigo-promocion ocultar">
                        <div class="editor-field ancho-mini">
                          <input id="codigo-descuento" value="">
                        </div>
                        <div class="boton-aplicar-codigo">
                          <span>Aplicar</span>
                        </div>
                      </div>
                    </div>
                    <div class="botonera-inferior">
                      <div class="boton-seguir-comprando">
                        <a>SEGUIR COMPRANDO</a>
                      </div>
                      <a class="enlace-vaciar-cesta">
                        Vaciar toda la cesta
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          ${dateFormatter(new Date()).default}
        </p>
      </nav>
    `;
  }
}
window.customElements.define('cesta-view', CestaView);
