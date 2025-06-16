import { useEffect } from "react";

function UpdateDarkmode(colourTheme) {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (colourTheme === null) {
        localStorage.setItem('darkmode', systemPrefersDark);
    }

    useEffect(() => {
        if (colourTheme) {
            document.body.classList.add('darkmode');
        } else {
            document.body.classList.remove('darkmode');
        }
    }, [colourTheme]);
}

export default UpdateDarkmode;