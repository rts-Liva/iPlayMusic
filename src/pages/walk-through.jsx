import { BsSoundwave } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosMusicalNote } from "react-icons/io";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import SlideElement from "../components/slide-element";

function WalkThroughPage() {
    const [activeSlide, setActiveSlide] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (activeSlide === 3) return;

        const timer = setTimeout(() => {
            setActiveSlide(activeSlide + 1);
        }, 5000);

        return () => clearTimeout(timer);
    }, [activeSlide]);

    return (
        <main className="walkthrough">
            <img src="/badges.svg" alt="background pattern" className="walkthrough__image" />
            <div className="walkthrough__slider">
                <SlideElement activeSlide={activeSlide} number={1}>where words fail,<br />music speaks</SlideElement>
                <SlideElement activeSlide={activeSlide} number={2}>no music<br />no life</SlideElement>
                <SlideElement activeSlide={activeSlide} number={3}>peace love<br />music</SlideElement>
            </div>
            <div className="walkthrough__steps">
                <BsSoundwave
                    className={`walkthrough__steps-icon ${activeSlide === 1 ? 'active' : ''}`}
                    onClick={() => setActiveSlide(1)}
                />
                <FaHeart
                    className={`walkthrough__steps-icon ${activeSlide === 2 ? 'active' : ''}`}
                    onClick={() => setActiveSlide(2)}
                />
                <IoIosMusicalNote
                    className={`walkthrough__steps-icon ${activeSlide === 3 ? 'active' : ''}`}
                    onClick={() => setActiveSlide(3)}
                />
            </div>
            <button onClick={() => navigate('/')} className="walkthrough__skip text">{activeSlide === 3 ? 'get started' : 'skip'}</button>
        </main>
    );
}

export default WalkThroughPage;