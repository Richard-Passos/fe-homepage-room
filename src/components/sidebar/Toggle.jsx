import { Button } from '../button';
import { STATE_ID } from './Root';

const Toggle = ({ ...props }) => {
  return (
    <Button.Toggle
      htmlFor={STATE_ID}
      {...props}
    />
  );
};

export default Toggle;
