import { useEffect } from "react";

function UpdatePlaying(setIsPaused) {
    useEffect(() => {
        function updateMode() {
            const songPaused = localStorage.getItem('playing')?.split(', ')[1];
            if (songPaused === null) return;

            setIsPaused(songPaused === 'paused');
        }

        window.addEventListener('songPlayingChange', updateMode);
        window.addEventListener('songModeChange', updateMode);

        return () => {
            window.removeEventListener('songPlayingChange', updateMode)
            window.removeEventListener('songModeChange', updateMode)
        }
    }, []);
}

export default UpdatePlaying;