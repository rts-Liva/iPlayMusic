import { useRef, useState } from "react";
import Header from "../components/header";
import playlists from "../../json/playlists.json";
import Footer from "../components/footer";

function PlayListsPage() {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

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

    return (
        <>
            <Header colour="light">playlists</Header>
            <img src="/background.svg" alt="colourful background" className="background" />
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
                                className={`playlist-slider__cover ${index === activeIndex ? 'active' : ''}`} />
                        ))
                    ) : <p className="text">No playlists found...</p>}
                </div>
            </main>
            <Footer current='playlists' />
        </>
    );
}

export default PlayListsPage;