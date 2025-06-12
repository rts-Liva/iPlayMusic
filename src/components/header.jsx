import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";

function Header({ children: title, colour = 'dark', navigateReturn = true }) {
    const navigate = useNavigate();

    return (
        <header className="header">
            {navigateReturn && <IoIosArrowBack onClick={() => navigate(-1)} className={colour === 'dark' ? 'header__icon' : 'header__icon header__icon--light'} />}
            <h1 className={colour === 'dark' ? 'header__title' : 'header__title header__title--light'}>{title}</h1>
            <IoIosSearch className={colour === 'dark' ? 'header__icon' : 'header__icon header__icon--light'} />
        </header>
    );
}

export default Header;