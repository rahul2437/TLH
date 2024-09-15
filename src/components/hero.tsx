import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import logo from "/logo.svg";
import putani from "/images/peanut_hero.png";
import peanut from "/images/putani_hero.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const items = [logo, peanut, putani];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[1200px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-[500px] overflow-hidden">
              <img
                src={item}
                alt={`Carousel item ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hero;
