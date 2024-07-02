import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.svg" alt="Logoipsum" width={100} />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Testimonials"
                className="text-md"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="http://surl.li/jaufhl"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={24} className="portfolio--icon" />
              </a>
            </li>
            <li>
              <a
                href="http://surl.li/oquolb"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={26} className="portfolio--icon" />
              </a>
            </li>
            <li>
              <a
                href="http://surl.li/qjjykk"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={24} className="portfolio--icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Anastasiia</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                id="cv"
                href="./public/files/Anastasiia_Aleksandrova_frontend_developer.pdf"
                className="footer--link text-sm"
                download
              >
                <IoCloudDownloadOutline /> &#xa0;&#xa0;Download my CV
              </a>
            </li>
            {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
