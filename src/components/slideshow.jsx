import styles from './styles/slideshow-styles.module.css';
import './styles/slideshow-styles.module.css';

import { useState } from 'react';

export default function Slideshow(props){
    const [slideIndex, setSlideIndex] = useState(0);

    function nextSlide(){
        setSlideIndex((slideIndex + 1) % props.images.length);
    }

    function prevSlide(){
        if(slideIndex === 0){
            setSlideIndex(props.images.length-1);
        }
        else{
            setSlideIndex(slideIndex - 1);
        }
    }
    
    function getClassName(index){
        if(index === slideIndex){
            return 'active';
        }
        else{
            return 'slides';
        }
    }

    return <div className={styles.slideshowContainer}>
        {props.images.map((image, index) => (
            <div className={styles[getClassName(index)]}>
                <img src={process.env.PUBLIC_URL + '/images' + image} className={styles.slideshowImage} alt=""/>
                <div className={styles.numberText}>{index+1} / {props.images.length}</div>
            </div>
        ))}
        <div className={styles.prev} onClick={prevSlide}>&#10094;</div>
        <div className={styles.next} onClick={nextSlide}>&#10095;</div>
    </div>
}