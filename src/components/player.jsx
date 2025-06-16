import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import songs from "../../json/songs.json";

function Player() {
    const id = localStorage.getItem('playing');
    const [song, setSong] = useState(
        () => songs?.songs[id - 1] || null
    );
    
    useEffect(() => {
        function updatePlaying() {
            const playing = localStorage.getItem('playing');
            if (playing === null) return;

            setSong(() => songs?.songs[Number(playing) - 1]);
        }

        window.addEventListener('localStorageChange', updatePlaying)

        return () => {
            window.removeEventListener('localStorageChange', updatePlaying)
        }
    }, []);

    return (
        song && (
            <Link to={`/playing/${song.id}`}>
                <div className="media-player">
                    <img src={song.cover} alt={`${song.title} cover`} className="media-player__cover" />
                    <section>
                        <h2 className="sub-heading sub-heading--light">{song.title}</h2>
                        <p className="text text--light">{song.artist}</p>
                    </section>
                    <FaPlay className="media-player__play" />
                </div>
            </Link>
        )
    );
}

export default Player;