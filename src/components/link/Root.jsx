import Link from 'next/link';

import { cn, isExternalLink } from '@/utils';

const Root = ({ href = '#', className, ...props }) => {
  const isExternal = isExternalLink(href);

  props = {
    href,
    className: cn('cursor-pointer', className),
    ...props,
  };

  return isExternal ? (
    <a
      rel='noreferrer'
      target='_blank'
      {...props}
    />
  ) : (
    <Link {...props} />
  );
};

export default Root;
