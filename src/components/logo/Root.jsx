import { Link } from '../link';
import { Svg } from '../svg';

const Root = (props) => {
  return (
    <Link
      href='/'
      {...props}
    >
      <Svg.Logo />
    </Link>
  );
};

export default Root;
