import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
// Components
import { TestContainer } from "./main";
import items from "./items";

export default function Products(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <h2>{item.caption}</h2>
        <img 
          className="carouselImg" 
          src={item.src} 
          alt={item.altText} 
        />
      </CarouselItem>
    );
  });

  return (
    <TestContainer>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <CarouselControl 
          direction="prev" 
          directionText="Previous" 
          onClickHandler={previous} 
        />
        <CarouselControl 
          direction="next" 
          directionText="Next" 
          onClickHandler={next} 
        />
      </Carousel>
    </TestContainer>
  )
}
