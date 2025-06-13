import { useParams } from "react-router";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaBackward, FaForward, FaPlay } from "react-icons/fa";
import Header from "../../components/header";
import songs from "../../../json/songs.json";
import SvgGradient from "../../components/svg-gradient";

function MediaPlayerPage() {
    const { id } = useParams();
    const song = songs?.songs[id - 1];

    function calculateDuration(duration) {
        // Converts seconds into minutes.
        const durationInMinutes = duration / 60;
        // Grabs only the full minute (ignores decimals)
        const minutes = Math.trunc(durationInMinutes);
        // Converts the leftover decimals back into seconds.
        const seconds = Math.round((durationInMinutes - minutes) * 60);

        // padStart makes sure there will always be 2 digits (m:06 rather than m:6)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <>
            <SvgGradient />
            <Header search={false}>playing</Header>
            <main className="music">
                <img src={song.cover} alt={`${song.title} cover`} className="music__cover" />
                <h2 className="music__title">{song.title}</h2>
                <p className="text">{song.artist}</p>
                <div className="music-player">
                    <div className="music-player__progress"></div>
                    <p className="text">0:00</p>
                    <p className="text">{calculateDuration(song.duration)}</p>
                </div>
                <div className="music-control">
                    <MdSkipPrevious className="music-control__btn music-control__btn--gradient" />
                    <FaBackward className="music-control__btn" />
                    <FaPlay className="music-control__btn music-control__btn--center" />
                    <FaForward className="music-control__btn" />
                    <MdSkipNext className="music-control__btn music-control__btn--gradient" />
                </div>
            </main>
        </>
    );
}

export default MediaPlayerPage;