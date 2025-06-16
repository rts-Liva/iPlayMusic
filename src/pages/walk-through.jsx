import { BsSoundwave } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosMusicalNote } from "react-icons/io";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import StepOne from "../components/step-one";
import StepTwo from "../components/step-two";
import StepThree from "../components/step-three";

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
                <StepOne activeSlide={activeSlide} />
                <StepTwo activeSlide={activeSlide} />
                <StepThree activeSlide={activeSlide} />
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