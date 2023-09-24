import { Link, Logo, Sidebar, Svg } from '@/components';
import { pages } from '@/constants';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'absolute top-0 z-40 flex w-full items-center gap-24 px-[--page-x] pt-[--page-x] text-neutral-content md:px-[--page-x-2]',
        className,
      )}
      {...props}
    >
      <Aside />

      <Logo className='max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2' />

      <Nav className='gap-8 max-md:hidden' />
    </header>
  );
};

const Aside = () => {
  return (
    <Sidebar className='md:hidden'>
      <Sidebar.Toggle>
        <Svg.Menu />
      </Sidebar.Toggle>

      <Sidebar.Drawer>
        <Sidebar.Drawer.Content>
          <article className='flex items-center justify-between bg-base p-[--page-x] text-base-content'>
            <Sidebar.Toggle className='-translate-x-1/4'>
              <Svg.Close />
            </Sidebar.Toggle>

            <Nav />
          </article>
        </Sidebar.Drawer.Content>

        <Sidebar.Drawer.CloseOverlay />
      </Sidebar.Drawer>
    </Sidebar>
  );
};

const Nav = ({ className, ...props }) => {
  return (
    <nav
      className={cn('flex flex-wrap justify-end gap-4', className)}
      {...props}
    >
      {pages.map(({ href, text }) => (
        <Link
          className='group/link relative'
          href={href}
          key={`Header nav ${href}`}
        >
          {text}

          <span
            aria-label='Border'
            className='absolute bottom-0 left-1/2 h-[0.1em] w-1/2 -translate-x-1/2 translate-y-[300%] scale-x-0 bg-current duration-100 group-hover/link:scale-x-100'
          />
        </Link>
      ))}
    </nav>
  );
};

export default Root;
