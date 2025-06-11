import { BiCategory } from "react-icons/bi";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { IoIosAlbums, IoMdWifi } from "react-icons/io";
import { PiPlaylist } from "react-icons/pi";
import { Link } from "react-router";

function Footer({ current }) {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer-menu">
                    <li>
                        <Link to='/albums'>
                            <IoIosAlbums className={current === 'albums' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                    <li>
                        <Link to='/playlists'>
                            <PiPlaylist className={current === 'playlists' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <IoMdWifi className={current === 'featured' ? 'footer-menu__icon featured active' : 'footer-menu__icon featured'} />
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