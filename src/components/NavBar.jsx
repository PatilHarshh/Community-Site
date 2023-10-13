import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, NavLink } from "react-router-dom"; 

export const NavBar = () => {

  // const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // }

  function handleSignOut(){
    alert('logOut')
    localStorage.removeItem('res');
    window.location.reload();
  }

  function handleSignIn(){
    document.querySelector('.home').classList.remove('d-none');
  }
  

  return (  
    // <Router>
    //   <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    //     <Container>
    //       <Navbar.Brand href="/">
    //         <img src={logo} alt="Logo" />
    //         <h4 class="t ext-light" mt-10  >SSBT's Coding Club</h4>

    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav">
    //         <span className="navbar-toggler-icon"></span>
    //       </Navbar.Toggle>
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ms-auto">
    //           <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
    //           <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Events</Nav.Link>
    //           <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About</Nav.Link>
    //           <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Blogs</Nav.Link>
    //         </Nav>
    //         <span className="navbar-text">
    //           <div className="social-icon">
    //             <a href="#"><img src={navIcon1} alt="" /></a>
    //             <a href="#"><img src={navIcon2} alt="" /></a>
    //             <a href="#"><img src={navIcon3} alt="" /></a>
    //           </div>
    //           <HashLink to='#connect'>
    //             <button className="vvd"><span>Let’s Connect</span></button>
    //           </HashLink>
    //         </span>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </Router>
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
          <h4 class="text-light" mt-10  >SSBT's Coding Club</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link navbar-link">Home</NavLink>
              <NavLink to="/events" className="nav-link navbar-link">Events</NavLink>
              <NavLink to="/about" className="nav-link navbar-link">About</NavLink>
              <NavLink to="/blogs" className="nav-link navbar-link">Blogs</NavLink>
            </Nav>
            <span className="navbar-text">
               <div className="social-icon">
                 <a href="#"><img src={navIcon1} alt="" /></a>
                 <a href="#"><img src={navIcon2} alt="" /></a>
                 <a href="#"><img src={navIcon3} alt="" /></a>
               </div>
               <HashLink>
                 <button onClick={(localStorage.getItem('res')==='res') ? handleSignOut : handleSignIn} className={(localStorage.getItem('res')==='res') ? 'signOutBtn' : 'signInBtn'} id="handleLoginBtn"><span>{(localStorage.getItem('res')==='res') ? 'Sign Out' : 'Login'}</span></button>
               </HashLink>
             </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
