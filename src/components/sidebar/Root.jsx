import { Button } from '../button';

const STATE_ID = 'sidebar-toggle'

const Root = ({ children, ...props }) => {
  return (
    <aside {...props}>
      <Button.Toggle.State id={STATE_ID} />

      {children}
    </aside>
  );
};

export default Root;
export {STATE_ID}
