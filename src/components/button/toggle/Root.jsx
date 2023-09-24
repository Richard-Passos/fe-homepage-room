'use client';

import { useEffect, useRef } from 'react';

import Button from '../Root';

const Root = ({ children, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current)
      ref.current.addEventListener('keypress', (ev) =>
        clickOnKeyPress(ev, ref),
      );
  }, [ref]);

  return (
    <Button
      asChild
      role='button'
      tabIndex={0}
      {...props}
    >
      <label ref={ref}>{children}</label>
    </Button>
  );
};

const keys = ['Enter', ' '];

const clickOnKeyPress = (ev, elementRef) => {
  if (keys.includes(ev.key)) {
    ev.preventDefault();

    elementRef.current.click();
  }
};

export default Root;
