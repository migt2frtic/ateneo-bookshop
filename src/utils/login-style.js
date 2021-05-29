import { css } from 'lit-element';

const technologiesSectionStyles = css`
  .technologies {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2px;
    row-gap: 2px;
    padding: 0 15px 0 15px;
  }

  .tech-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    height: auto;
    background-color: var(--nav-background);
  }

  .card-text {
    text-align: center;
    font-size: 15px;
    letter-spacing: 0.5px;
    line-height: 21px;
  }

  @media (min-width: 414px) {
    .card-text {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (min-width: 540px) {
    .card-text {
      font-size: 18px;
    }

    .technologies {
      margin: 0 20px 0 20px;
    }
  }

  @media (min-width: 768px) {
    .tech-card {
      min-height: 200px;
    }

    .technologies {
      margin: 0 60px 0 60px;
    }

    .card-text {
      padding: 0 80px 0 80px;
    }
  }

  @media (min-width: 1136px) {
    .technologies {
      grid-template-columns: repeat(2, 1fr);
      margin: 0 90px 0 90px;
      padding: 0;
    }

    .card-text {
      line-height: 28px;
      padding: unset;
    }
  }
 
`;
export const styles = css`
  :host {
    --header-height: 120px;
    --nav-height: 50px;
    --header-nav-height: calc(var(--header-height) + var(--nav-height));
    --main-height: calc(100vh - var(--header-nav-height));

    --nav-background: rgba(0, 0, 0, 0.05);
    --header-background: rgb(50, 50, 50);
    --border-grey: #c7c4c4;

    display: grid;
    grid-template-rows: var(--header-height) var(--nav-height) auto;
    font-family: 'Open Sans', sans-serif, Arial;
    letter-spacing: 0.4px;
    font-weight: 300;

    position: relative;
    width: 100%;
    height: 100%;
  }

  .section-title {
    font-family: 'Raleway', sans-serif;
    letter-spacing: 6px;
    line-height: 35px;
  }

  .section-title.centered {
    text-align: center;
    margin: 70px 0;
    padding: 0 30px;
  }

  .section-title-decorator {
    color: #339c91;
  }

  .card-decorator {
    color: #066e8e;
  }

  .separator {
    margin: 0;
    border: 0;
    border-bottom: 1px solid #b9b7b7;
    border-bottom-left-radius: 100%;
    border-top-right-radius: 100%;
  }

  .separator.sm {
    width: 80px;
    border-bottom-width: 1.4px;
  }

  .separator.red {
    border-bottom-color: #dc6260;
  }

  .separator.blue {
    border-bottom-color: #60c8dc;
  }

  .separator.green {
    border-bottom-color: #c0dc60;
  }

  .separator.centered {
    width: 300px;
    align-self: center;
    margin: 30px 0px;
    border-bottom-width: 2px;
  }

  .scrolltop-arrow {
    position: fixed;
    bottom: 0;
    right: 0;

    width: 50px;
    height: 50px;
    margin: 20px;
    border: none;
    border-radius: 100%;
    color: white;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.6s;
    cursor: pointer;
  }

  @media (min-width: 540px) {
    .section-title {
      line-height: unset;
    }
  }
  
  ${technologiesSectionStyles}

  `;