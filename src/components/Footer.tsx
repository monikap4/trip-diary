import style from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <p>© {currentYear} Horizont</p>
    </footer>
  );
};

export default Footer;
