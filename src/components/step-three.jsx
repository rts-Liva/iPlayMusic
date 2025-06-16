import { useEffect, useState } from "react";

function StepThree({ activeSlide }) {
    const [slidePos, setSlidePos] = useState('');

    useEffect(() => {
        switch (activeSlide) {
            case 1:
                setSlidePos('prev');
                break;

            case 2:
                setSlidePos('next');
                break;

            case 3:
                setSlidePos('active');
                break;
        }
    }, [activeSlide]);

    return (
        <section className={`walkthrough__slider-element ${slidePos}`}>
            <h2 className="walkthrough__title">peace love<br />music</h2>
            <p className="walkthrough__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
        </section>
    );
}

export default StepThree;