import'./Header.css'

function Header (){
    return (
      <header>
        <div className="navbar-container">
          <div className="container d-flex justify-content-between align-items-center">
            <h2 className="logo">Next1</h2>
            <nav className="navbar">
              <ul className="d-flex">
                <li>
                  <a className="nav-link" href="#hero"></a>Home
                </li>
                <li>
                  <a className="nav-link" href="#about"></a>About
                </li>
                <li>
                  <a className="nav-link" href="#project"></a>Project
                </li>
                <li>
                  <a className="nav-link" href="#contact"></a>Contact
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <h1 className="hero-title">Hi , I am Roya Almasimehr</h1>
        <p className="hero-desc">Front-end developer based in Iran</p>
      </header>
    );
}


export default Header