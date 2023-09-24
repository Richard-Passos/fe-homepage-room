import { Button, Carousel, Image, Svg, Text } from '@/components';
import { heroCarouselContent } from '@/constants';

const Hero = () => {
  return (
    <section>
      <Carousel itemsLength={heroCarouselContent.length}>
        <Carousel.Inner>
          {heroCarouselContent.map((content, i) => (
            <Item
              key={`Hero carousel ${content.title}`}
              {...{ ...content, i }}
            />
          ))}
        </Carousel.Inner>
      </Carousel>
    </section>
  );
};

const Item = ({ img, title, text, i }) => {
  return (
    <Carousel.Item
      className='w-full shrink-0 lg:flex'
      index={i}
    >
      <div className='relative aspect-video w-full shrink-0 lg:w-[55%]'>
        <Image
          priority={i === 0}
          quality={100}
          {...img}
        />

        <section className='absolute bottom-0 flex max-lg:right-0 lg:left-full'>
          <Carousel.Prev asChild>
            <Button
              className='aspect-square h-16'
              variant='neutral'
            >
              <Svg.Chevron className='rotate-180' />
            </Button>
          </Carousel.Prev>

          <Carousel.Next asChild>
            <Button
              className='aspect-square h-16'
              variant='neutral'
            >
              <Svg.Chevron />
            </Button>
          </Carousel.Next>
        </section>
      </div>

      <section className='flex flex-col justify-center gap-[--gap] px-[--px] py-[calc(var(--px)*1.5)] [--gap:theme(spacing.4)] [--px:--page-x] md:[--px:--page-x-2]'>
        <Text.Title className='text-4xl md:text-5xl'>{title}</Text.Title>

        <Text>{text}</Text>

        <Button className='mt-[--gap]'>
          Shop now <Svg.Arrow />
        </Button>
      </section>
    </Carousel.Item>
  );
};

export default Hero;
