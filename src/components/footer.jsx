import { BiCategory } from "react-icons/bi";
import { FaCircleHalfStroke, FaCompactDisc } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { Link } from "react-router";
import SvgGradient from "./svg-gradient";

function Footer({ current }) {
    return (
        <footer className="footer">
            <nav>
                <SvgGradient />
                <ul className="footer-menu">
                    <li>
                        <Link to='/albums'>
                            <FaCompactDisc className={current === 'albums' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                    <li>
                        <Link to='/playlists'>
                            <MdLibraryMusic className={current === 'playlists' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <GiSoundWaves className={current === 'featured' ? 'footer-menu__icon featured active' : 'footer-menu__icon featured'} />
                        </Link>
                    </li>
                    <li>
                        <FaCircleHalfStroke className={current === 'darkmode' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                    </li>
                    <li>
                        <Link to='/categories'>
                            <BiCategory className={current === 'categories' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;