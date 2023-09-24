import { cn } from '@/utils';

const State = ({ className, id, ...props }) => {
  return (
    <input
      className={cn('peer hidden', className)}
      id={id}
      type='checkbox'
      {...props}
    />
  );
};

export default State;
