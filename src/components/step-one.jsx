import { useEffect, useState } from "react";

function StepOne({ activeSlide }) {
    const [slidePos, setSlidePos] = useState('');

    useEffect(() => {
        switch (activeSlide) {
            case 1:
                setSlidePos('active');
                break;

            case 2:
                setSlidePos('prev');
                break;

            case 3:
                setSlidePos('next');
                break;
        }
    }, [activeSlide]);

    return (
        <section className={`walkthrough__slider-element ${slidePos}`}>
            <h2 className="walkthrough__title">where words fail,<br />music speaks</h2>
            <p className="walkthrough__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
        </section>
    );
}

export default StepOne;