"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselPropsType } from "./types";

export function Carousel(props: CarouselPropsType) {
  const { children } = props;

  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  return (
    <div className="embla w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y touch-pinch-zoom gap-8 md:gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
