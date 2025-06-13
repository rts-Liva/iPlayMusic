import { IoIosArrowForward } from "react-icons/io";
import Header from "../components/header";
import genres from "../../json/genres.json";
import Footer from "../components/footer";

function CategoriesPage() {
    return (
        <>
            <Header navigateReturn={false}>categories</Header>
            <main>
                <h2 className="heading heading--gradient">categories</h2>
                <div className="genre-list">
                    {genres?.genres.length > 0 ? (
                        genres?.genres.map(genre => (
                            <details className="genre-list__details" name="genres" key={genre.id}>
                                <summary className="genre-list__name">{genre.name}</summary>
                                {genre.subgenres.length > 0 ? (
                                    genre.subgenres.map((subgenre, index) => (
                                        <div className="genre-list__subgenre" key={index}>
                                            <p className="genre-list__subgenre-name">{subgenre}</p>
                                            <IoIosArrowForward className="genre-list__subgenre-icon" />
                                        </div>
                                    ))
                                ) : <p className='text'>No sub-genres found...</p>}
                            </details>
                        ))
                    ) : <p className='text'>No categories found...</p>}
                </div>
            </main>
            <Footer current='categories' />
        </>
    );
}

export default CategoriesPage;