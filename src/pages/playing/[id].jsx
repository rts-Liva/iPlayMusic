import { useParams } from "react-router";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaBackward, FaForward, FaPlay } from "react-icons/fa";
import Header from "../../components/header";
import songs from "../../../json/songs.json";
import SvgGradient from "../../components/svg-gradient";
import CalculateDuration from "../../components/calculate-duration";

function MediaPlayerPage() {
    const { id } = useParams();
    const song = songs?.songs[id - 1];

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
                    <p className="text">{CalculateDuration(song.duration)}</p>
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