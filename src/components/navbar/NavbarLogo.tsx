
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2" aria-label="SPENDLESS home">
      <img 
        src="/lovable-uploads/4c207960-91fa-490e-9f6d-43f129b17017.png" 
        alt="SPENDLESS Logo" 
        className="h-10" 
        width="40"
        height="40"
      />
      <span className="font-display font-bold text-2xl tracking-tight text-primary-700">SPENDLESS</span>
    </Link>
  );
};

export default NavbarLogo;
