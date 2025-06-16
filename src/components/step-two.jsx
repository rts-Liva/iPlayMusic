import { useEffect, useState } from "react";

function StepTwo({ activeSlide }) {
    const [slidePos, setSlidePos] = useState('');

    useEffect(() => {
        switch (activeSlide) {
            case 1:
                setSlidePos('next');
                break;

            case 2:
                setSlidePos('active');
                break;

            case 3:
                setSlidePos('prev');
                break;
        }
    }, [activeSlide]);

    return (
        <section className={`walkthrough__slider-element ${slidePos}`}>
            <h2 className="walkthrough__title">no music<br />no life</h2>
            <p className="walkthrough__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
        </section>
    );
}

export default StepTwo;