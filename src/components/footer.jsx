import { BiCategory } from "react-icons/bi";
import { FaCircleHalfStroke, FaCompactDisc } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { Link } from "react-router";
import { useState } from "react";
import SvgGradient from "./svg-gradient";
import UpdateDarkmode from "./update-darkmode";

function Footer({ current }) {
    const colourTheme = JSON.parse(localStorage.getItem('darkmode'));
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (colourTheme === null) {
        localStorage.setItem('darkmode', systemPrefersDark);
    }
    
    const [darkmode, setDarkmode] = useState(
        colourTheme !== null ? colourTheme : systemPrefersDark
    );

    function toggleTheme() {
        setDarkmode(prev => !prev);
        localStorage.setItem('darkmode', !darkmode);
    }

    UpdateDarkmode(colourTheme);

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
                        <FaCircleHalfStroke onClick={toggleTheme} className={current === 'darkmode' ? 'footer-menu__icon darkmode-btn active' : 'footer-menu__icon darkmode-btn'} />
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