import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import songs from "../../json/songs.json";
import UpdatePlaying from "./update-playing";

function Player() {
    const paused = localStorage.getItem('playing')?.split(', ')[1];
    const id = localStorage.getItem('playing')?.split(', ')[0];
    const [isPaused, setIsPaused] = useState(paused === 'paused');
    const [song, setSong] = useState(
        () => songs?.songs[id - 1] || null
    );

    useEffect(() => {
        function updatePlaying() {
            const songId = JSON.parse(localStorage.getItem('playing')?.split(', ')[0]);
            if (songId === null) return;

            setSong(() => songs?.songs[songId - 1]);
        }

        window.addEventListener('songPlayingChange', updatePlaying);
        
        return () => {
            window.removeEventListener('songPlayingChange', updatePlaying)
        }
    }, []);

    UpdatePlaying(setIsPaused);

    function togglePlaying(mode) {
        localStorage.setItem('playing', `${id}, ${mode}`);
        window.dispatchEvent(new Event('songModeChange'));
    }

    return (
        song && (
            <div className="media-player">
                <Link to={`/playing/${song.id}`} className="media-player__info">
                    <img src={song.cover} alt={`${song.title} cover`} className="media-player__cover" />
                    <section>
                        <h2 className="sub-heading sub-heading--light">{song.title}</h2>
                        <p className="text text--light">{song.artist}</p>
                    </section>
                </Link>
                {!isPaused && <FaPlay className="media-player__play" onClick={() => togglePlaying('paused')} />}
                {isPaused && <FaPause className="media-player__play" onClick={() => togglePlaying('playing')} />}
            </div>
        )
    );
}

export default Player;