import Header from "../components/header";
import albums from "../../json/albums.json";
import Footer from "../components/footer";
import { Link } from "react-router";

function HomePage() {
    return (
        <>
            <Header navigateReturn={false}>featured</Header>
            <main>
                <h2 className="heading heading--gradient">featured</h2>
                <div className="featured-album">
                    {albums?.featuredAlbums?.length > 0 ? (
                        albums?.featuredAlbums?.map(album => (
                            <Link to={`/album/${album.id}`} key={album.id}>
                                <article className="featured-album-card">
                                    <img src={album.imagePath} alt={`${album.title} cover`} className="featured-album-card__cover" />
                                    <section className="featured-album-card__text">
                                        <h3 className="featured-album-card__title">{album.title}</h3>
                                        <p className="text text--light">{album.description}</p>
                                    </section>
                                </article>
                            </Link>
                        ))
                    ) : <p className="text">No featured albums found...</p>}
                </div>
            </main>
            <Footer current='featured' />
        </>
    );
}

export default HomePage;