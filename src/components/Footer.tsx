import { Link } from "react-router-dom";
import logo from "@/assets/cohesion_logo.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground"><img src={logo} alt="Cohesion Logo" /></span>
            </div>
            <span className="text-lg font-bold text-foreground">Cohesion</span>
          </Link>
          
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Cohesion Empowerment Foundation. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
              Programs
            </Link>
            <Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">
              Impact
            </Link>
            <Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">
              Partners
            </Link>
            <Link to="/cup" className="text-muted-foreground hover:text-primary transition-colors">
              Cup
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
