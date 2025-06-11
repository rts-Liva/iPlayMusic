import Header from "../components/header";
import albums from "../../json/albums.json";
import Footer from "../components/footer";

function HomePage() {
    return (
        <>
            <Header>featured</Header>
            <main>
                <h2 className="heading heading--gradient">featured</h2>
                <div className="featured-album">
                    {albums?.featuredAlbums?.length > 0 ? (
                        albums?.featuredAlbums?.map(album => (
                            <article className="featured-album-card" key={album.id}>
                                <img src={album.imagePath} alt={`${album.title} cover`} className="featured-album-card__cover" />
                                <section className="featured-album-card__text">
                                    <h3 className="featured-album-card__title">{album.title}</h3>
                                    <p className="text text--light">{album.description}</p>
                                </section>
                            </article>
                        ))
                    ) : <p>No featured albums found...</p>}
                </div>
            </main>
            <Footer current='albums' />
        </>
    );
}

export default HomePage;