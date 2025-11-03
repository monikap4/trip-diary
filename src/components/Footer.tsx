import style from './Footer.module.scss';

export const Footer = () => (
  <footer className={style.footer}>
    <p>© {new Date().getFullYear()} Horizont</p>
  </footer>
);
