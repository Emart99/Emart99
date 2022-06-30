import './NavbarStyles.scss'

export function Navb() {
  return (
    <header>
      <div className="header-container ">
        <nav className="site-nav d-flex gap-4">
          <a href="#coffe">
            Coffee 
          </a>
          <a href="#about">
            About
          </a>
          <a href="#portfolio">
            Portfolio
          </a>
          <a href="#contact">
            Contact
          </a>  
        </nav>
      </div>
    </header>
  );
}
