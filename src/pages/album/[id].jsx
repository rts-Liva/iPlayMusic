import { useParams } from "react-router";
import { FaPlay } from "react-icons/fa6";
import Header from "../../components/header";
import details from "../../../json/details.json";
import CalculateDuration from "../../components/calculate-duration";
import Player from "../../components/player";
import Footer from "../../components/footer";

function AlbumDetailsPage() {
    const { id } = useParams();
    const album = details?.albums[id - 1];

    function newPlaying(id) {
        localStorage.setItem('playing', id);
        window.dispatchEvent(new Event('localStorageChange'));
    }

    return (
        <>
            <Header colour="light" search={false}>album</Header>
            <main>
                <div className="details">
                    <img src={album.imagePath} alt={`${album.title} cover`} className="details__cover" />
                    <section>
                        <h2 className="heading heading--light">{album.title}</h2>
                        <p className="sub-heading sub-heading--light">{album.songs.length} songs</p>
                    </section>
                    <div>
                        <p className="text text--light">genres hastags</p>
                        <ul className="details__list">
                            {album.genres.length > 0 ? (
                                album.genres.map((genre, index) => (
                                    <li key={index} className="details__list-item">#{genre}</li>
                                ))
                            ) : <p className='text'>No genres hastags found...</p>}
                        </ul>
                    </div>
                </div>
                <section className="playlist-info">
                    <h3 className="sub-heading details__sub-heading">all songs</h3>
                    <div className="album-list">
                        {album.songs.length > 0 ? (
                            album.songs.map(song => (
                                <article className="album-list-card" onClick={() => newPlaying(song.id)} key={song.id}>
                                    <FaPlay className="playlist-info__icon" />
                                    <div>
                                        <h4 className="sub-heading">{song.title}</h4>
                                        <p className="text">{song.artist}</p>
                                    </div>
                                    <p className="text album-list-card__text">{CalculateDuration(song.duration)}</p>
                                </article>
                            ))
                        ) : <p className='text'>No songs found...</p>}
                    </div>
                </section>
            </main>
            <Player />
            <Footer current='albums' />
        </>
    );
}

export default AlbumDetailsPage;