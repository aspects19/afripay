import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-icon-primary flex items-center justify-center shadow-glow group-hover:animate-glow-pulse transition-all">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">Afripay</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How it Works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button variant="default">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                How it Works
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Pricing
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-center">Sign In</Button>
                <Button variant="default" className="justify-center">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
