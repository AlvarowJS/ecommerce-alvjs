import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Academlo 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="" className="redes__links">
          <i className='bx bxl-instagram-alt'></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
          <i className='bx bxl-linkedin-square'></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
          <i className='bx bxl-youtube'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterScreen;