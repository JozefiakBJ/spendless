
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2" aria-label="SPENDLESS home">

      <span className="font-display font-bold text-2xl tracking-tight text-primary-700">SPENDLESS</span>
    </Link>
  );
};

export default NavbarLogo;
