import { cn } from '@/utils';

const Content = ({ className, ...props }) => {
  return (
    <section
      aria-label='Content'
      className={cn('relative z-10 hidden group-peer-checked:block', className)}
      {...props}
    />
  );
};

export default Content;
