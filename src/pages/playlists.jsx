import { useRef, useState } from "react";
import { Link } from "react-router";
import { FaPlay } from "react-icons/fa6";
import Header from "../components/header";
import playlists from "../../json/playlists.json";
import Footer from "../components/footer";
import CalculateDuration from "../components/calculate-duration";

function PlayListsPage() {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const sliderRef = useRef(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 20;

    function onTouchStart(e) {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    function onTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    function onTouchEnd() {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeIndex < playlists.list.length - 1) {
            setActiveIndex(prev => prev + 1);
        }
        if (isRightSwipe && activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }

        // Reset
        setTouchStart(null);
        setTouchEnd(null);
    };

    const playlist = playlists?.list[activeIndex];

    return (
        <>
            <Header colour="light" navigateReturn={false}>playlists</Header>
            <div className="background"></div>
            <main className="playlist">
                <h2 className="heading">playlists</h2>
                <div
                    className="playlist-slider"
                    ref={sliderRef}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {playlists?.list?.length > 0 ? (
                        playlists?.list?.map((playlist, index) => (
                            <img
                                src={playlist.cover}
                                alt={`${playlist.name} cover`}
                                key={playlist.id}
                                className={`playlist-slider__cover ${index === activeIndex ? 'active' : index < activeIndex ? 'prev' : 'next'}`} />
                        ))
                    ) : <p className="text">No playlists found...</p>}
                </div>
                <section className="playlist-info">
                    <h3 className="playlist-info__name">{playlist.name}</h3>
                    <div className="album-list">
                        {playlist.songs.length > 0 ? (
                            playlist.songs.map(song => (
                                <Link to={`/playing/${song.id}`} key={song.id}>
                                    <article className="album-list-card">
                                        <FaPlay className="playlist-info__icon" />
                                        <div>
                                            <h4 className="sub-heading">{song.title}</h4>
                                            <p className="text">{song.artist}</p>
                                        </div>
                                        <p className="text album-list-card__text">{CalculateDuration(song.duration)}</p>
                                    </article>
                                </Link>
                            ))
                        ) : <p className='text'>No songs found...</p>}
                    </div>
                    <button className="playlist-info__btn">listen all</button>
                </section>
            </main>
            <Footer current='playlists' />
        </>
    );
}

export default PlayListsPage;