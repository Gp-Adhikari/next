import { useEffect, useState, useRef } from "react";
// import { NavNavLink, useLocation, useNavigate } from "next";
import { useRouter } from "next/router";

import { NavLink } from "./NavLink.component";

// import logo from "/client/logo.svg";
// import burgerOpenIcon from "/client/menu-open.svg";
// import burgerCloseIcon from "/client/menu-close.svg";

// import homeIcon from "/client/home.svg";
// import aboutIcon from "/client/about.svg";
// import servicesIcon from "/client/services.svg";
// import carrersIcon from "/client/carrers.svg";
// import contactIcon from "/client/contact.svg";
// import portfolioIcon from "/client/portfolio.svg";

const Header = () => {
  const router = useRouter();
  const location = useRouter();

  useEffect(() => {
    const header = document.querySelector("header");
    const checkLocation = location.pathname.split("/");

    if (header !== undefined) {
      if (checkLocation.includes("admin")) {
        header.classList.add("admin-hidden");
      }
    }
  }, [location]);

  const mobNavContainerRef = useRef(null);
  const mobNavLeftRef = useRef(null);
  const mobNavRightRef = useRef(null);

  const [mob, setMob] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (mobNavContainerRef && mobNavLeftRef && mobNavRightRef) {
      if (isNavOpen) {
        mobNavContainerRef.current.style = "z-index: 80;";
        mobNavLeftRef.current.style = "left:0%; transition: 0.5s ease-in-out;";
        mobNavRightRef.current.style =
          "right: 0%; transition: 0.5s ease-in-out;";
      } else {
        mobNavLeftRef.current.style =
          "left: -50%; transition: 0.5s ease-in-out;";
        mobNavRightRef.current.style =
          "right: -50%; transition: 0.5s ease-in-out;";
        setTimeout(() => {
          mobNavContainerRef.current.removeAttribute("style");
        }, 500);
      }
    }
  }, [isNavOpen, mobNavContainerRef, mobNavLeftRef, mobNavRightRef]);

  //on nav open
  useEffect(() => {
    if (isNavOpen) {
      return (document.body.style = `overflow: hidden; width:100%;`);
    } else {
      return document.body.removeAttribute("style");
    }
  }, [isNavOpen]);

  //mob nav open/close
  useEffect(() => {
    if (Math.floor(window.innerWidth) < 750) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

  //header scroll animation
  useEffect(() => {
    const header = document.querySelector("header");
    const logo = document.querySelector("img.logo");
    const navBar = document.querySelector("nav");

    if (header === undefined && logo === undefined && navBar === undefined)
      return;
    const shrinkHeader = 300;
    document.addEventListener("scroll", () => {
      var scroll = getCurrentScroll();
      if (scroll > shrinkHeader) {
        header.classList.add("shrink");
        logo.classList.add("img-shrink");
        navBar.classList.add("nav-shrink");
      } else {
        header.classList.remove("shrink");
        logo.classList.remove("img-shrink");
        navBar.classList.remove("nav-shrink");
      }
    });
    const getCurrentScroll = () => {
      return window.pageYOffset;
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-wrapper">
          <img
            src={"/client/logo.svg"}
            className="logo"
            onClick={() => {
              scrollToTop();
              router.push("/");
            }}
            alt="logo"
          />
          <nav>
            <NavLink href="/" exact onClick={() => scrollToTop()}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={() => scrollToTop()}>
              About
            </NavLink>
            <NavLink href="/services" onClick={() => scrollToTop()}>
              Services
            </NavLink>
            <NavLink href="/portfolio" onClick={() => scrollToTop()}>
              Portfolio
            </NavLink>
            <NavLink href="/careers" onClick={() => scrollToTop()}>
              Careers
            </NavLink>
            <NavLink href="/contact" onClick={() => scrollToTop()}>
              Contact Us
            </NavLink>
          </nav>
          <img
            className="burger"
            onClick={() => setIsNavOpen(!isNavOpen)}
            src={isNavOpen ? "/client/menu-close.svg" : "/client/menu-open.svg"}
            alt="menu"
          />

          <div className="mob-nav-container" ref={mobNavContainerRef}>
            <div
              className="left"
              onClick={() => setIsNavOpen(!isNavOpen)}
              ref={mobNavLeftRef}
            ></div>
            <div className="mob-nav" ref={mobNavRightRef}>
              <div className="wrapper">
                <NavLink
                  href="/"
                  exact
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <>
                    <img src={"/client/home.svg"} alt="home" />
                    <p>Home</p>
                  </>
                </NavLink>
                <NavLink
                  href="/about"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <>
                    <img src={"/client/about.svg"} alt="about" />
                    <p> About</p>
                  </>
                </NavLink>
                <NavLink
                  href="/services"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <>
                    <img src={"/client/services.svg"} alt="services" />
                    <p>Services</p>
                  </>
                </NavLink>
                <NavLink
                  href="/portfolio"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <>
                    <img src={"/client/portfolio.svg"} alt="portfolio" />
                    <p>Portfolio</p>
                  </>
                </NavLink>
                <NavLink
                  href="/careers"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <>
                    <img src={"/client/carrers.svg"} alt="carrers" />
                    <p>Careers</p>
                  </>
                </NavLink>
                <NavLink
                  href="/contact"
                  onClick={() => {
                    scrollToTop();
                    setIsNavOpen(!isNavOpen);
                  }}
                >
                  <>
                    <img src={"/client/contact.svg"} alt="contact" />
                    <p>Contact Us</p>
                  </>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
