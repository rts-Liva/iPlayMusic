import { useState } from "react";
import UpdateSplash from "../components/update-splash";

function SplashScreen() {
    const [showSplashscreen, setShowSplashscreen] = useState(
        () => !JSON.parse(sessionStorage.getItem('showedSplashscreen'))
    );

    const colourTheme = JSON.parse(localStorage.getItem('darkmode'));

    UpdateSplash(setShowSplashscreen, showSplashscreen);

    return (
        <>
            <main className="splash">
                {colourTheme && <div className="splash__logo splash__logo--dark"></div>}
                {!colourTheme && <div className="splash__logo splash__logo--light"></div>}
                <h1 className="heading splash__title">iPlayMusic</h1>
            </main>
        </>
    );
}

export default SplashScreen;