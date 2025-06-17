import { useEffect } from "react";
import { useNavigate } from "react-router";

function UpdateSplash(setShowSplashscreen, showSplashscreen) {
    const navigate = useNavigate();

    useEffect(() => {
        if (showSplashscreen) {
            navigate('/splash-screen');

        } else {
            return;
        }

        setTimeout(() => {
            // Update local state to trigger component rerender
            setShowSplashscreen(false);
            // Update sessionStorage for next time app is mounted
            sessionStorage.setItem('showedSplashscreen', JSON.stringify(true));
            navigate('/walk-through');
        }, 3000);

    }, []);
}

export default UpdateSplash;