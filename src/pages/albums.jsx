import { Link } from "react-router";
import Header from "../components/header";
import albums from "../../json/albums.json";
import Player from "../components/player";
import Footer from "../components/footer";

function AlbumsPage() {
    return (
        <>
            <Header navigateReturn={false}>music</Header>
            <main className="album">
                <h2 className="heading heading--gradient">all albums</h2>
                <div>
                    <section className="album-menu">
                        <h3 className="sub-heading">featured albums</h3>
                        <button className="album-menu__btn">view all</button>
                    </section>
                    <div className="album-slider">
                        {albums?.featuredAlbums?.length > 0 ? (
                            albums?.featuredAlbums?.map(album => (
                                <Link to={`/album/${album.id}`} key={album.id}>
                                    <img
                                        src={album.imagePath}
                                        alt={`${album.title} cover`}
                                        className="album-slider__cover" />
                                </Link>
                            ))
                        ) : <p className="text">No featured albums found...</p>}
                    </div>
                </div>
                <div>
                    <section className="album-menu">
                        <h3 className="sub-heading">new releases</h3>
                        <button className="album-menu__btn">view all</button>
                    </section>
                    <div className="album-list">
                        {albums?.newReleases?.length > 0 ? (
                            albums?.newReleases?.map(album => (
                                <Link to={`/album/${album.id}`} key={album.id}>
                                    <article className="album-list-card">
                                        <img
                                            src={album.imagePath}
                                            alt={`${album.title} cover`}
                                            className="album-list-card__cover" />
                                        <div>
                                            <h4 className="sub-heading">{album.title}</h4>
                                            <p className="text">{album.artist}</p>
                                        </div>
                                        <p className="text album-list-card__text">{album.songs} songs</p>
                                    </article>
                                </Link>
                            ))
                        ) : <p className="text">No new releases found...</p>}
                    </div>
                </div>
            </main>
            <Player />
            <Footer current='albums' />
        </>
    );
}

export default AlbumsPage;