import { Image, Text } from '@/components';

const About = () => {
  return (
    <section className='flex max-lg:flex-col'>
      <picture className='flex-1 object-cover'>
        <Image
          alt='A room with two chairs and a table in the dark.'
          height={226}
          quality={100}
          src='/images/about-dark.jpg'
          width={420}
        />
      </picture>

      <article className='flex-1 space-y-4 px-[--px] py-[calc(var(--px)*1.5)] [--px:--page-x]'>
        <Text.Title className='uppercase tracking-md'>
          About our furniture
        </Text.Title>

        <Text>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Text>
      </article>

      <picture className='flex-1 object-cover'>
        <Image
          alt='A white chair in a white room.'
          height={226}
          quality={100}
          src='/images/about-light.jpg'
          width={440}
        />
      </picture>
    </section>
  );
};

export default About;
