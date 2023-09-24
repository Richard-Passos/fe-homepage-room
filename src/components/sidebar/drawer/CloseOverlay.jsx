import { cn } from '@/utils';

import { Button } from '../../button';
import { STATE_ID } from '../Root';

const CloseOverlay = ({ className, ...props }) => {
  return (
    <Button.Toggle
      className={cn('absolute h-full w-full bg-neutral opacity-25', className)}
      htmlFor={STATE_ID}
      tabIndex={-1}
      {...props}
    />
  );
};

export default CloseOverlay;
