import { css } from 'lit-element';

export const navigatorStyles = css`
  :host {
    --background-color: #eae8e8;
    --dark-color: #3c3b3b;
  }

  .menu-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .menu-list li {
    color: black;
    background-color: var(--background-color);
    margin-bottom: 2px;
    font-size: 20px;
    cursor: pointer;
  }

  .menu-list li a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 20px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) {
    .menu-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }

    .menu-list li {
      margin: 20px;
      line-height: 150px;
      border-radius: 3px;
    }

    .menu-list li a {
      height: 150px;
      width: 150px;
    }

    .menu-list li a:hover {
      background-color: #3e5c7b;
      color: white;
    }
  }
`;

export const headerStyles = css`
  header {
    display: flex;
    align-items: center;
    background-color: var(--header-background);
  }

  .logo {
    width: 400px;
    height: auto;
  }
`;
export const commonStyles = css`
  .container {
    padding: 20px;
  }

  .common-list {
    margin: 40px 0px;
  }

  .common-btn {
    background-color: transparent;
    border: 1px solid grey;
    padding: 10px;
    margin: 5px;
    outline: none;
    cursor: pointer;
  }

  .common-btn:hover {
    background-color: #f1f1f1;
  }
  .contenedor{color: #777;
    letter-spacing: 0em;
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    display: block;
    box-sizing: border-box;
    position: relative;
    background-color: transparent;
    }
  .contenido{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: inherit;
    max-width: 1080px;
  }
 .contenedor-central mi-cesta{ 
  display: block;
  width: 100%;
  padding: 10px;
}
.panel-navegacion-pedido{
list-style: none;
font-size: 100%;
max-width: 1003px;
margin: 0 auto;
padding: 0;
padding-left: 2px;
}
.lista-flotante{
  overflow:hidden;
  width:100%; }
.lista-flotante li{vertical-align:top;float:left;display:inline-table}

.solapa-paso.actual
{
letter-spacing: 0em;
list-style: none;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: top;
float: left;
display: inline-table;
position: relative;
height: 40px;
background-repeat: no-repeat;
background-position: top;
width: auto;
-webkit-border-radius: 2px;
text-align: center;
background-color: #51a100;
margin: 0;
background-image: none;
margin-left: 0;}
`;

export const registerStyles = css`
.hall {
  display: flex;
  justify-content: center;
  text-align: center;
  height: var(--main-height);
}
.panel-formulario{
  position: relative;
  padding: 15px
  border: 1px solid #dfdfdf;
  box-shadow: none;
  width: 500px;
  margin-top: 60px;
  margin-bottom: 20px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  }
  .panel {
    position: relative;
    padding: 15px;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: 32rem;
  padding: 2rem;
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
  list-style-type: none;
}
  .form-container li {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  input {
    padding: 1rem;
    border: 0.1rem #c0c0c0 solid;
    border-radius: 0.5rem;
  }
  .button {
    padding: 1rem;
    border: 0.1rem #808080 solid;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .button.primary {
    background-color: #f0c040;
  }
  .button.secondary {
    background-color: #f0f0f0;
  }
  .text-center {
    text-align: center;
  }

`;