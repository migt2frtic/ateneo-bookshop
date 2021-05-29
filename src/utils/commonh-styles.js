import { css } from 'lit-element';

const navigatorStyles = css`
  nav {
    font-family: 'Sen', sans-serif;
    background-color: var(--nav-background);
    letter-spacing: 1.6px;
    font-size: 16px;
  }

  .nav-link:hover {
    border-bottom: 1px solid #59868c;
  }

  .menu-btn {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    overflow: hidden;
    outline: none;
    cursor: pointer;
  }

  .menu-icon,
  .scroll-menu-icon {
    font-size: 40px;
    color: #716a6f;
    transition: transform 1s;
  }

  .menu-icon.rotate {
    transform: rotate(180deg);
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: var(--header-nav-height);

    width: 100%;
    height: 0;

    margin: 0;
    padding: 0;

    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
    list-style: none;
    z-index: 1;
  }

  .opened {
    height: var(--main-height);
  }

  .closed {
    height: 0;
  }
  .nav-list.opened,
  .nav-list.closed {
    transition: height 1s;
  }

  .nav-list > li {
    margin: 20px 0;
  }

  .nav-link {
    text-decoration: none;
    color: #fff;
  }

  .scroll-menu {
    position: fixed;
    top: -70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    background-color: var(--header-background);
    opacity: 0.98;
    transition: top 0.5s;
    z-index: 2;
  }

  .scroll-menu > .nav-list {
    margin-right: 30px;
  }

  .scroll-menu > img {
    width: 40px;
    margin-left: 20px;
  }

  .nav-link.fixed {
    color: #fff;
  }

  .scroll-menu-btn {
    margin-right: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .scroll-menu-btn > i {
    color: white;
  }

  @media (min-width: 850px) {
    .nav-list {
      all: unset;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      height: 100%;
      list-style: none;
    }

    .nav-list > li {
      margin: 0 15px 0 15px;
    }

    .nav-list.opened {
      transition: unset;
    }

    .nav-link {
      color: #424242;
    }

    .menu-btn,
    .scroll-menu-btn {
      display: none;
    }
  }
`;

const headerStyles = css`
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--header-background);
  }

  .logo {
    width: 400px;
    height: auto;
  
  }
`;

export const styles = css`
  :host {
    --header-height: 120px;
    --nav-height: 50px;
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

  ${headerStyles}
  ${navigatorStyles}
    
`;
