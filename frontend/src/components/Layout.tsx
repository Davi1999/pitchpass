import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowRight, Close, Menu } from './Icons';
import { Logo } from './Logo';

const navItems = [
  { label: 'Learn', to: '/learn' },
  { label: 'Clubs', to: '/clubs' },
  { label: 'Live', to: '/live' },
  { label: 'Quiz', to: '/quiz' }
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Logo />

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Link className="btn btn--primary btn--sm header__cta" to="/find-your-club">
            Find your club
            <ArrowRight />
          </Link>
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <nav className="container mobile-nav__inner" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'mobile-nav__link is-active' : 'mobile-nav__link'
                }
              >
                {item.label}
                <ArrowRight />
              </NavLink>
            ))}
            <Link className="btn btn--accent mobile-nav__cta" to="/find-your-club">
              Find your club
              <ArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo />
          <p>
            The Premier League for people who are still learning the words. Rules, clubs,
            matchdays and the drama in between.
          </p>
          <span className="footer__badge">Prototype · demo data</span>
        </div>

        <div className="footer__links">
          <div>
            <h3>Explore</h3>
            <Link to="/learn">Learn the game</Link>
            <Link to="/clubs">Club directory</Link>
            <Link to="/live">Live Hub</Link>
            <Link to="/quiz">The quiz</Link>
          </div>
          <div>
            <h3>Start here</h3>
            <Link to="/learn/premier-league-explained">How the league works</Link>
            <Link to="/learn/offside-explained">Offside, explained</Link>
            <Link to="/find-your-club">Find your club</Link>
            <a href="/api/health" target="_blank" rel="noreferrer">
              API status
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} PitchPass</span>
        <span>
          Made for new fans. Not affiliated with the Premier League or any club. Club
          badges are original monograms.
        </span>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function Layout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
