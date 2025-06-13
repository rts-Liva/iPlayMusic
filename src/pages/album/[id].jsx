import { Link, useParams } from "react-router";
import { FaPlay } from "react-icons/fa6";
import Header from "../../components/header";
import details from "../../../json/details.json";
import Footer from "../../components/footer";

function AlbumDetailsPage() {
    const { id } = useParams();
    const album = details?.albums[id - 1];

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
            <Header colour="light" search={false}>album</Header>
            <main>
                <div className="details">
                    <img src={album.imagePath} alt={`${album.title} cover`} className="details__cover" />
                    <section>
                        <h2 className="heading">{album.title}</h2>
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
                                <Link to={`/playing/${song.id}`} key={song.id}>
                                    <article className="album-list-card">
                                        <FaPlay className="playlist-info__icon" />
                                        <div>
                                            <h4 className="sub-heading">{song.title}</h4>
                                            <p className="text">{song.artist}</p>
                                        </div>
                                        <p className="text album-list-card__text">{calculateDuration(song.duration)}</p>
                                    </article>
                                </Link>
                            ))
                        ) : <p className='text'>No songs found...</p>}
                    </div>
                </section>
            </main>
            <Footer current='albums' />
        </>
    );
}

export default AlbumDetailsPage;