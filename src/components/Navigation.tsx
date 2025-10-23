import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cohesion_logo.png";

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">
                <img src={logo} alt="Cohesion Logo" className="w-8 h-8" />
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">Cohesion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { to: "/", label: "Home" },
              { to: "/programs", label: "Programs" },
              { to: "/impact", label: "Impact" },
              { to: "/partners", label: "Partners" },
              { to: "/cup", label: "Cup" },
              { to: "/gallery", label: "Gallery" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-3">
              <Link to="/contact">
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </Link>
              <Link to="/cup">
                <Button size="sm" className="hero-gradient">
                  Register
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 top-16 w-full bg-background border-t border-border shadow-lg transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="flex flex-col items-center gap-4 py-6">
            {[
              { to: "/", label: "Home" },
              { to: "/programs", label: "Programs" },
              { to: "/impact", label: "Impact" },
              { to: "/partners", label: "Partners" },
              { to: "/cup", label: "Cup" },
              { to: "/gallery", label: "Gallery" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 w-11/12 mt-4">
              <Link to="/contact" onClick={closeMenu}>
                <Button variant="outline" size="sm" className="w-full">
                  Contact
                </Button>
              </Link>
              <Link to="/cup" onClick={closeMenu}>
                <Button size="sm" className="w-full hero-gradient">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
