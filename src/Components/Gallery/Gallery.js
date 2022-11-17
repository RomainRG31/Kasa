import React, { useState } from 'react';
import "@/Components/Gallery/Gallery.css";

import ArrowRight from "@/Assets/Images/Components/Gallery/GalleryArrowRight.png";
import ArrowLeft from "@/Assets/Images/Components/Gallery/GalleryArrowLeft.png";


const Gallery = ({ pictures }) => {

    const [index, setIndex] = useState(0);

    const previousImage = () => {
        setIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1)
    }

    const nextImage = () => {
        setIndex((prevIndex) => prevIndex + 1 === pictures.length ? 0 : prevIndex + 1)
    }

    return (
        <div className="slideshow">
            <img className="arrowLeft" src={ArrowLeft} alt="flèche gauche" onClick={() => previousImage()} />
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                {pictures.map((picture, index) => (
                    <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>

                ))}
            </div>
            <img className="arrowRight" src={ArrowRight} alt="flèche droite" onClick={() => nextImage()} />
            <span className="paging"> {index + 1} / {pictures.length} </span>
        </div>

    );



}


export default Gallery;

