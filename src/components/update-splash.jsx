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
            // Update localStorage for next time app is mounted
            localStorage.setItem('showedSplashscreen', JSON.stringify(true));
            navigate('/');
        }, 3000);

    }, []);
}

export default UpdateSplash;