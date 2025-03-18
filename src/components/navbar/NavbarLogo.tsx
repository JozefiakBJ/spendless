
import { Link } from 'react-router-dom';
import { PiggyBank } from 'lucide-react';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2" aria-label="SPENDLESS home">
      <PiggyBank className="h-6 w-6 text-primary-700" />
      <span className="font-display font-bold text-2xl tracking-tight text-primary-700">SPENDLESS</span>
    </Link>
  );
};

export default NavbarLogo;
