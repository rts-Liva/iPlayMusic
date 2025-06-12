import { BiCategory } from "react-icons/bi";
import { FaCircleHalfStroke, FaCompactDisc } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { Link } from "react-router";

function Footer({ current }) {
    return (
        <footer className="footer">
            <nav>
                <svg width='0' height='0' className="footer__gradient">
                    <linearGradient id="gradient" x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop stopColor="#EE0979" offset='0%' />
                        <stop stopColor="#F2BC06" offset='100%' />
                    </linearGradient>
                </svg>
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