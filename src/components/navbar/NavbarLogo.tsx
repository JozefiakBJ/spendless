
import { Link } from 'react-router-dom';
import { PiggyBank } from 'lucide-react';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2" aria-label="SPENDLESS home">
      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
        <PiggyBank className="h-5 w-5 text-white" />
      </div>
      <span className="font-display font-bold text-2xl tracking-tight text-primary-700">SPENDLESS</span>
    </Link>
  );
};

export default NavbarLogo;
