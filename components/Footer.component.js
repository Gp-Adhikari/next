import { useEffect } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink.component";
import { useRouter } from "next/router";

const Footer = () => {
  const location = useRouter();

  useEffect(() => {
    const footer = document.querySelector("footer");
    const checkLocation = location.pathname.split("/");

    if (footer !== undefined) {
      if (checkLocation.includes("admin")) {
        footer.classList.add("admin-hidden");
      }
    }
  }, [location]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer>
        <div className="topFooter">
          <div className="footerContainer">
            <div className="firstRow">
              <img className="footerLogo" src={"/client/logo.svg"} alt="logo" />
              <div className="firstRowItem">
                <img src={"/client/location-icon.svg"} alt="location" />
                <p>Bhaktapur, Nepal</p>
              </div>
              <div className="firstRowItem">
                <img src={"/client/mail-icon.svg"} alt="mail" />
                <p>zprofs.company@gmail.com</p>
              </div>
              <div className="firstRowItem">
                <img src={"/client/phone-icon.svg"} alt="phone" />
                <p>+977-9876543210</p>
              </div>
            </div>
            <div className="secondRow">
              <h2>Quick Links</h2>
              <NavLink href="/careers" onClick={() => scrollToTop()}>
                Careers
              </NavLink>
              <NavLink href="/portfolio" onClick={() => scrollToTop()}>
                Portfolio
              </NavLink>
            </div>
            <div className="thirdRow">
              <h2>Resources</h2>
              <NavLink href="/policy" onClick={() => scrollToTop()}>
                Privacy Policy
              </NavLink>
              <NavLink href="/faq" onClick={() => scrollToTop()}>
                FAQ
              </NavLink>
            </div>
            <div className="fourthRow">
              <h2>Get in Touch</h2>
              <Link href="/contact">
                <input type="button" value="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          <p className="copyRightText">
            Copyright &copy; 2021 Zpro . All Rights Reserved.
          </p>
          <div className="socialMediaIcons">
            <div
              className="circle"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/Zprofessionals/",
                  "_blank"
                )
              }
            >
              <img src={"/client/facebook-icon.svg"} alt="facebookIcon" />
            </div>
            <div className="circle">
              <img src={"/client/instagram-icon.svg"} alt="instagramIcon" />
            </div>
            <div className="circle">
              <img src={"/client/linkedin-icon.svg"} alt="linkedinIcon" />
            </div>
            <div className="circle">
              <img src={"/client/twitter-icon.svg"} alt="twitterIcon" />
            </div>
            <div className="circle">
              <img src={"/client/tiktok-icon.svg"} alt="tiktokIcon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
